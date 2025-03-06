// Nota: Este es un archivo de configuración de ejemplo para Firebase
// Deberás reemplazar los valores con tu propia configuración de Firebase

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-auth-domain.firebaseapp.com",
  projectId: "tu-project-id",
  storageBucket: "tu-storage-bucket.appspot.com",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };