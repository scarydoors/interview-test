"use client";

import Button from "@/components/button";
import Container from "@/components/container";
import NeedAuth from "@/components/need-auth";
import { useAuth } from "@/contexts/auth-context";
import { useEffect, useState } from "react";
import ProfileInfo from "./profile-info";

// TODO: probably should move this into its own file
export type ProfileResponse = {
  email: string,
  firstName: string,
  lastName: string,
}

async function getProfile(token: string): Promise<ProfileResponse> {
  const response = await fetch("/api/profile", {
    method: "POST",
    body: JSON.stringify({token}),
  });
  if (response.status === 401) {
    return Promise.reject("You are unauthorized. Please login again.");
  } else if (response.status === 400) {
    return Promise.reject("Something went wrong. Please refresh the page to retry.");
  }
  return response.json();
}
export default function Profile() {
  const { logout, token } = useAuth();
  const [profile, setProfile] = useState<ProfileResponse | undefined>();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    if (!profile && token) {
      getProfile(token).then((profile) => {
        setProfile(profile);
      }).catch((reason) => {
          setError(reason);
        });
    }
  }, [token]);

  return (
    <NeedAuth>
      <div className="h-screen flex flex-col justify-end sm:justify-center items-center px-2 pb-12">
        <Container className="max-w-3xl space-y-4">
          <h1 className="text-2xl font-semibold">Profile</h1>
          <ProfileInfo profile={profile} errorMessage={error} />
          <Button onClick={() => logout()}>Logout</Button>
      </Container>
      </div>
    </NeedAuth>
  );
}
