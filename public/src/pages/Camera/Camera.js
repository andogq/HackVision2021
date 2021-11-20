import { useEffect, useState, useRef } from 'react'

import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions'
import app from 'fire'

import { Navigation } from 'components'

import { Container } from './cameraStyle'

const MODES = {
  capture: 0,
  preview: 1,
  sending: 2,
}

const functions = getFunctions(app)

// TODO: Remove this
connectFunctionsEmulator(functions, "localhost", 5001)

const upload_image = httpsCallable(functions, "upload_image")

const Camera = () => {
  const video_element = useRef(null)
  const image_element = useRef(null)
  const [ stream, set_stream ] = useState(null)

  const [ mode, set_mode ] = useState(MODES.capture)
  
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  
  useEffect(() => {
    const startVideo = async () => {
      // Request the camera from the user
      let new_stream = await navigator.mediaDevices.getUserMedia({ video: true })

      // Save the stream
      set_stream(new_stream)

      // Render it in the video element and play it
      video_element.current.srcObject = new_stream
      video_element.current.play()
    }

    startVideo()
  }, [])

  const capture = () => {
    // Ensure canvas size matches video stream
    canvas.height = video_element.current.videoHeight
    canvas.width = video_element.current.videoWidth

    // Draw the video frame
    ctx.drawImage(video_element.current, 0, 0)

    // Show preview
    set_mode(MODES.preview)

    // Export it as blob
    canvas.toBlob((blob) => {
      let url = URL.createObjectURL(blob)

      image_element.current.addEventListener("load", () => URL.revokeObjectURL(url), { once: true })
      image_element.current.src = url

      // Read the blob and output as Data URL
      let reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.addEventListener("load", () => {
        let url = reader.result

        // Show the image to the user
        image_element.current.addEventListener("load", () => URL.revokeObjectURL(url), { once: true })
        image_element.current.src = url

        // Upload the image
        upload_image({ image: url.split(",", 2)[1] }).then(console.log)
      })
    }, "image/jpeg")

    // Stop video capture
    for (let track of stream.getTracks()) track.stop()
  }
  
  return (
    <Container>
      {mode === MODES.capture && (
        <>
          <video ref={video_element} />
        </>
      )}

      {mode === MODES.preview && <img ref={image_element} alt="What you captured" />}
      
      <Navigation onCameraClick={capture} />
    </Container>
  )
}

export default Camera
