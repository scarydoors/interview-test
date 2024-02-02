import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NeedAuth({children}: {children: React.ReactNode}) {
  const {isLoading, isAuthenticated} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading || !isAuthenticated) {
    return (
      <>
        <h1>spinner</h1>
      </>
    )
  }

  return (
    <>
      {children}
    </>
  )
}
