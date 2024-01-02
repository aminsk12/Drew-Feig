import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyC3e20QuMwkrJ7YcwgBLVQWdW4p-yaHpCM",
  authDomain: "complit-stayvista.firebaseapp.com",
  projectId: "complit-stayvista",
  storageBucket: "complit-stayvista.appspot.com",
  messagingSenderId: "428477763129",
  appId: "1:428477763129:web:1159a95bb8da6450cd47e8"
}

export const app = initializeApp(firebaseConfig)
