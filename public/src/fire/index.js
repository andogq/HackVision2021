import { initializeApp } from 'firebase/app'

const app = initializeApp({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY || 'AIzaSyCaIt2gBRhlYM44hyKfWKPalrfOaReV484',
  authDomain: 'hackvision-2021.firebaseapp.com',
  projectId: 'hackvision-2021',
  storageBucket: 'hackvision-2021.appspot.com',
  messagingSenderId: '438974112353',
  appId: '1:438974112353:web:630bb18cc5271aff5e0020',
})

export default app