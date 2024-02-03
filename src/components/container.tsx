type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`bg-white py-12 lg:px-8 px-6 rounded-lg shadow-lg ring-4 ring-inset ring-gray-300 w-full ${className}`}
    >
      {children}
    </div>
  );
}
