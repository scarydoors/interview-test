
export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="w-full bg-red text-white py-2 rounded-md shadow-sm font-semibold text-sm
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red
      hover:bg-red-dark"
      {...props}
    >
    </button>
  )
}
