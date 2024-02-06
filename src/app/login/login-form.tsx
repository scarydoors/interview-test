import Button from "@/components/button";
import Input from "@/components/input";
import { FormEvent, useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

type LoginFormState = {
  username: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [formState, setFormState] = useState<LoginFormState>({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const hasErrors = errorMessage !== undefined && errorMessage.length !== 0;

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormState({ ...formState, [name]: value });
    setErrorMessage("");
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // prevent form routing
    event.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(formState), // `formState` mirrors the structure the endpoint expects
    });

    if (response.status === 200) {
      const json = await response.json();
      const token = json.token;
      if (login(token)) {
        router.push("/profile");
      }
    } else if (response.status === 401) {
      setErrorMessage("Username or password incorrect.");
    } else if (response.status === 400) {
      setErrorMessage("Something went wrong.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="pt-12 space-y-6 w-full">
      <Input
        type="text"
        label="Username"
        name="username"
        onChange={onChange}
        value={formState.username}
        error={hasErrors}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        onChange={onChange}
        value={formState.password}
        error={hasErrors}
      />
      {hasErrors ? (
        <div className="text-red text-sm">{errorMessage}</div>
      ) : null}
      <Button>Login</Button>
    </form>
  );
}
