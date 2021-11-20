import create from 'zustand'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from 'fire'

const useProfileStore = create(set => ({
  profile: undefined,

  signUp: async (email, password) => {
    const auth = getAuth(app)
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    set({ profile: user })
  },

  signIn: async (email, password) => {
    const auth = getAuth(app)
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    set({ profile: user })
  },

  signOut: async () => {
    const auth = getAuth(app)
    await signOut(auth)
    set({ profile: undefined })
  },
}))

export default useProfileStore