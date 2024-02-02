'use client';

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface LoginFormState {
  username: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [formState, setFormState] = useState<LoginFormState>({
    username: "",
    password: "",
  });

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormState({...formState, [name]: value});
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // prevent form routing
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(formState), // `formState` mirrors the structure the endpoint expects
    });

    if (response.status === 200) {
      const json = await response.json();
      const token = json.token;
      if (login(token)) {
        router.push('/profile');
      } 
    } else if (response.status === 401) {
      console.log('wrong password and username');
    } else if (response.status === 400) {
      console.log('smth went wrong');
    }
  }

  return (
    <>
      <h1>login page :_)</h1>
      <form onSubmit={onSubmit}>
        <label>
          Username:
        <input type="text" name="username" onChange={onChange} value={formState.username}/>
        </label>
        <label>
          Password:
        <input type="password" name="password" onChange={onChange} value={formState.password}/>
        </label>
        <button type="submit">
          Login
        </button>
      </form>
    </>
  )
}
