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
} from './loginStyle'

import logo from 'res/logo.svg'

const defaultValues = {
  email: '',
  password: '',
}

const Login = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const profile = useProfileStore(state => state.profile)
  const signIn = useProfileStore(state => state.signIn)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm({ defaultValues })

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
      await signIn(values.email, values.password)
    } catch (err) {
      setError('Incorrect email or password')
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

      <Button
        type="submit"
        disabled={!isDirty || isLoading}
        loading={isLoading}
      >Login</Button>
      <Center>Don't have an account? <Link to="/signup">Signup</Link>!</Center>
    </Form>
  )
}

export default Login