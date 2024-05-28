'use client';

import { useEffect, createContext, useState } from 'react';
import {
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import firebase_app from '@/src/firebase/config';
import { useRouter } from 'next/navigation';

const auth = getAuth(firebase_app);

interface Auth {
  user: any | null;
  logout: any | null;
  googleSignIn: any | null;
  isLoading: boolean;
}

export const AuthContext = createContext<Auth>({
  user: null,
  logout: null,
  googleSignIn: null,
  isLoading: true,
});

export function AuthContextProvider({ children }: { children: any }) {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });

  const googleSignIn = () =>
    signInWithPopup(auth, googleProvider).catch((error) => {
      console.log('Caught error Popup closed');
    });

  const logout = () => {
    auth.signOut().then(
      function () {
        console.log('Signed Out');
        setUser(null);
      },
      function (error) {
        console.error('Sign Out Error', error);
      }
    );
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        router.push('/');
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout, googleSignIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
