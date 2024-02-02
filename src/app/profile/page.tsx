"use client";

import NeedAuth from "@/components/need-auth";

export default function Profile() {
  return (
    <NeedAuth>
      <h1>you are authed if you can see this .....</h1>
    </NeedAuth>
  )
} 
