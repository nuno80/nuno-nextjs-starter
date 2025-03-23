import { Navbar } from "@/components/navbar";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="text-gray-600 mt-4">The page you are looking for does not exist.</p>
      </main>
    </div>
  );
}