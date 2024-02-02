"use client";

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import Image from 'next/image';
import LoginForm from "./login-form";
import PageSpinner from "@/components/page-spinner";


export default function Login() {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace('/profile');
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading || isAuthenticated) {
    return (
      <PageSpinner/>
    )
  }

  return (
    <div className="h-screen flex flex-col justify-end sm:justify-center items-center px-2 pb-12"> 
      <div className="flex flex-col items-center bg-white py-12 lg:px-8 px-6 rounded-lg shadow-lg ring-2 ring-inset ring-gray-300 w-full max-w-xs">
        <Image src="/connexin-logo.png" alt="Connexin Logo" width="200" height="70" />
        <LoginForm/>
      </div>
    </div>
  );
}
