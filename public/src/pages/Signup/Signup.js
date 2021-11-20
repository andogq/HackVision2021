import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useProfileStore } from 'stores'
import { getAuth } from 'firebase/auth'
import app from 'fire'

import {
  Message,
  TextField,
  Button,
} from 'components'

import {
  Logo,
  Title,
  Form,
  Center,
} from './signupStyle'

import logo from 'res/logo.svg'

const defaultValues = {
  email: '',
  password: '',
  passwordRepeat: '',
}

const Signup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const profile = useProfileStore(state => state.profile)
  const signUp = useProfileStore(state => state.signUp)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isDirty },
    watch,
  } = useForm({ defaultValues })

  const watchPassword = watch('password')

  useEffect(() => {
    const checkLogin = async user => {
      if (!user) return setIsLoading(false)
      if (profile) {
        navigate('/feed')
      } else {
        setIsLoading(false)
      }
    }

    getAuth(app).onAuthStateChanged(checkLogin)
  }, [profile])

  const onSubmit = async values => {
    setIsLoading(true)
    setError(null)
    try {
      await signUp(values.email, values.password)
    } catch (err) {
      setError('An error occurred, please try again')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Logo src={logo} alt="" />
      <Title>GreenSnap</Title>

      {error && (
        <Message error onClose={() => setError(null)}>
          {error}
        </Message>
      )}

      <TextField
        {...register('email', {
          required: 'Email address is required',
        })}
        type="email"
        label="Email address"
        required
      />
      <TextField
        {...register('password', {
          required: 'Password is required',
        })}
        type="password"
        label="Password"
        required
      />
      <TextField
        {...register('passwordRepeat', {
          required: 'Password is required',
          validate: value => value === watchPassword || 'Passwords must match',
        })}
        type="password"
        label="Password"
        required
      />

      <Button
        type="submit"
        disabled={!isDirty || isLoading}
        loading={isLoading}
      >Signup</Button>
      <Center>Already have an account? <Link to="/login">Login</Link>!</Center>
    </Form>
  )
}

export default Signup