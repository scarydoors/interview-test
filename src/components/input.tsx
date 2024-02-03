import { FormEvent } from "react";

type InputProps = {
  type: string;
  name: string;
  label: React.ReactNode | string;
  // could change this to take in a string to display error text underneath the field
  error?: boolean;
  value?: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => void | null;
};

export default function Input({
  type,
  name,
  label,
  value,
  onChange,
  error = false,
}: InputProps) {
  return (
    <label className="block text-sm font-medium leading-6 text-gray-900">
      {label}
      <div className="pt-2">
        <input
          className={`border-0 block w-full rounded-md py-1.5 shadow-sm ring-inset
          focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6
          ${error ? "ring-2 ring-red focus:ring-red-dark" : "ring-1 ring-gray-300 focus:ring-green"}`}
          type={type}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
    </label>
  );
}
