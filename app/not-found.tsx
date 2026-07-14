import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F8F4EF] px-6 text-center">
      <h1 className="font-serif text-7xl text-[#B8794B]">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-600">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link href="/" className="mt-8">
        <Button>
          Back Home
        </Button>
      </Link>
    </main>
  );
}