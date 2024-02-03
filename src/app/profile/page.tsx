"use client";

import Button from "@/components/button";
import NeedAuth from "@/components/need-auth";
import { useAuth } from "@/contexts/auth-context";

export default function Profile() {
  const { logout } = useAuth();
  return (
    <NeedAuth>
      <h1>you are authed if you can see this .....</h1>
      <Button onClick={() => logout()}>logout</Button>
    </NeedAuth>
  );
}
