import Link from "next/link";

export default function Home() {
  return (
    <main className="container p-3 mx-auto text-center">
      Add Quiz here use zustand for state management!
      <div className="mt-12 grid grid-cols-2 gap-2">
        <Link
          href="/water"
          className="bg-blue-500 rounded-md px-6 py-1.5 transition-all duration-300 font-semibold text-blue-100"
        >
          Water
        </Link>
        <Link
          href={"/earth"}
          className="bg-green-300 rounded-md px-6 py-1.5 transition-all duration-300 font-semibold text-green-900"
        >
          Earth
        </Link>

        <Link
          href={"/fire"}
          className="bg-red-300 rounded-md px-6 py-1.5 transition-all duration-300 font-semibold text-orange-900"
        >
          Fire
        </Link>
        <Link
          href={"/air"}
          className="bg-cyan-300 rounded-md px-6 py-1.5 transition-all duration-300 font-semibold text-sky-900"
        >
          Air
        </Link>
      </div>
    </main>
  );
}
