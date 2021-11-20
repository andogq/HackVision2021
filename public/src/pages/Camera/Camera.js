import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions'
import app from 'fire'

import { Navigation } from 'components'

import { Container } from './cameraStyle'

const functions = getFunctions(app)

// TODO: Remove this
//connectFunctionsEmulator(functions, "localhost", 5001)

const upload_image = httpsCallable(functions, "upload_image")

const Camera = () => {
  const videoElement = useRef(null)
  const imageElement = useRef(null)
  const [stream, setStream] = useState(null)
  const [isCapturing, setIsCapturing] = useState(true)

  const navigate = useNavigate();
  
  useEffect(() => {
    let new_stream = undefined

    const startVideo = async () => {
      // Request the camera from the user
      new_stream = await navigator.mediaDevices.getUserMedia({ video: true })

      // Save the stream
      setStream(new_stream)

      // Render it in the video element and play it
      videoElement.current.srcObject = new_stream
      videoElement.current.play()
    }

    startVideo()

    return () => {
      // Stop video capture
      for (let track of new_stream.getTracks()) track.stop()
    }
  }, [])

  const capture = () => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    // Ensure canvas size matches video stream
    canvas.height = videoElement.current.videoHeight
    canvas.width = videoElement.current.videoWidth

    // Draw the video frame
    ctx.drawImage(videoElement.current, 0, 0)

    // Show preview
    setIsCapturing(false)

    // Export it as blob
    canvas.toBlob((blob) => {
      let url = URL.createObjectURL(blob)

      imageElement.current.addEventListener("load", () => URL.revokeObjectURL(url), { once: true })
      imageElement.current.src = url

      // Read the blob and output as Data URL
      let reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.addEventListener("load", () => {
        let url = reader.result

        // Show the image to the user
        imageElement.current.addEventListener("load", () => URL.revokeObjectURL(url), { once: true })
        imageElement.current.src = url

        // Upload the image
        upload_image({ image: url.split(",", 2)[1] }).then(({ data }) => {
          navigate("/results", {
              state: [ ...data.map(({ description }) => description) ]
          })
        })
      })
    }, "image/jpeg")

    // Stop video capture
    for (let track of stream.getTracks()) track.stop()
  }
  
  return (
    <Container>
      {isCapturing ? (
        <video ref={videoElement} />
      ) : (
        <img ref={imageElement} alt="What you captured" />
      )}
      
      <Navigation onCameraClick={capture} />
    </Container>
  )
}

export default Camera
