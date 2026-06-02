import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAYFKnTPwv2htOC5skyct-IJpkXWwE_zak",
  authDomain: "optiworld.firebaseapp.com",
  projectId: "optiworld",
  storageBucket: "optiworld.firebasestorage.app",
  messagingSenderId: "382626927271",
  appId: "1:382626927271:web:f611c6066d6f03ed8ec182",
}

const app =
  initializeApp(firebaseConfig)

export const db =
  getFirestore(app)

export const auth =
  getAuth(app)