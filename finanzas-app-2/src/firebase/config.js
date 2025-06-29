import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Aquí van tus credenciales de Firebase
  apiKey:  "AIzaSyDQNjO4PcgrBc8U2SGNJjTLFXfIqR1nHF4",
  authDomain: "finance-fe92e.firebaseapp.com",
  projectId: "finance-fe92e",
  storageBucket: "finance-fe92e.firebasestorage.app",
  messagingSenderId: "684182353209",
  appId: "1:684182353209:web:0a6b41cf8ec64e0fe324e8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

