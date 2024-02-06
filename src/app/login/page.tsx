"use client";

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import LoginForm from "./login-form";
import PageSpinner from "@/components/page-spinner";
import Container from "@/components/container";

export default function Login() {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/profile");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || isAuthenticated) {
    return <PageSpinner />;
  }

  return (
    <div className="h-screen flex flex-col justify-end sm:justify-center items-center px-2 pb-12">
      <Container className="flex flex-col items-center max-w-xs">
        <Image
          src="/connexin-logo.png"
          alt="Connexin Logo"
          width="200"
          height="70"
        />
        <LoginForm />
      </Container>
    </div>
  );
}
