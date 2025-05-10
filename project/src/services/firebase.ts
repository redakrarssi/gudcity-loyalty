import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For this demo, we're using placeholder values
// In a real app, these would come from environment variables
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase app
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

// Check if we should initialize Firebase or use a mock
const shouldUseMock = typeof window !== 'undefined' && 
  window.localStorage && 
  localStorage.getItem('bypassLogin') === 'true';

// The actual implementation
try {
  if (firebaseConfig.apiKey !== "YOUR_API_KEY" && !shouldUseMock) {
    // Use real Firebase services
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    console.log('Using real Firebase services');
  } else {
    // Use mock services for development
    console.log('Using mock Firebase services');
    
    // Simple empty objects casted to the right type for TypeScript
    app = {} as unknown as FirebaseApp;
    db = {} as unknown as Firestore;
    
    // Basic mock of auth with the minimum functions we use
    const mockAuth = {
      currentUser: null,
      onAuthStateChanged: (observer: any) => {
        setTimeout(() => observer(null), 0);
        return () => {}; // Return unsubscribe function
      },
      signOut: async () => Promise.resolve()
    };
    
    auth = mockAuth as unknown as Auth;
  }
} catch (error) {
  console.warn('Error initializing Firebase:', error);
  
  // Fallback to mocks
  app = {} as unknown as FirebaseApp;
  db = {} as unknown as Firestore;
  auth = {
    currentUser: null,
    onAuthStateChanged: (observer: any) => {
      setTimeout(() => observer(null), 0);
      return () => {};
    },
    signOut: async () => Promise.resolve()
  } as unknown as Auth;
}

export { auth, db };
export default app;