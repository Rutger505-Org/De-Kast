import { auth } from "@/server/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className={"flex flex-col items-center justify-center gap-10"}>
        <div className={"flex flex-col items-center space-y-2.5"}>
          <h1 className="text-4xl font-bold">Welkom!</h1>
          <h2 className={"max-w-md text-center text-3xl font-bold"}>
            {session?.user.name}
          </h2>
        </div>

        <div className={"flex flex-col gap-7"}>
          <Link
            href="/dashboard/annuleren"
            className="rounded-full bg-gray-400 px-10 py-3 text-black hover:underline"
          >
            Annuleer abonnement
          </Link>
        </div>

        <div className={"flex flex-col gap-7"}>
          <Link
            href="/dashboard/inschrijven"
            className="rounded-full bg-gray-400 px-10 py-3 text-black hover:underline"
          >
            Inschrijven voor cursus
          </Link>
        </div>

        <div className={"flex flex-col gap-7"}>
          <Link
            href="/dashboard/coach"
            className="rounded-full bg-gray-400 px-10 py-3 text-black hover:underline"
          >
            Maak een afspraak met een coach
          </Link>
        </div>
      </main>
    </div>
  );
}
