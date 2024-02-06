import { FormEvent } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: React.ReactNode | string;
  error?: boolean;
  onChange: (event: FormEvent<HTMLInputElement>) => void | null;
}

export default function Input({
  label,
  error = false,
  ...inputProps
}: InputProps) {
  return (
    <label className="block text-sm font-medium leading-6 text-gray-900">
      {label}
      <div className="pt-2">
        <input
          className={`border-0 block w-full rounded-md py-1.5 shadow-sm ring-inset
          focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6
          ${error ? "ring-2 ring-red focus:ring-red-dark" : "ring-1 ring-gray-300 focus:ring-green"}`}
          {...inputProps}
        />
      </div>
    </label>
  );
}
