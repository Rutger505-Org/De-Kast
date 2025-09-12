import { auth } from "@/server/auth";
import { headers } from "next/headers";
import Link from "next/link";
import Cursus from "../../_components/cursus";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const cursusses = [
    { name: "Yoga", datum: "23-4-25", duur: "14.00 - 15.00" },
    { name: "Pilates", datum: "12-6-25", duur: "13.00 - 14.00" },
    { name: "Paaldansen", datum: "1-9-26", duur: "18.00 - 21.00" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className={"flex flex-col items-center justify-center gap-10"}>
        <div className={"flex flex-col items-center space-y-2.5"}>
          <h1 className="text-4xl font-bold">Inschrijven Cursus</h1>
        </div>
        {cursusses.map((cursus) => {
          return (
            <Cursus
              name={cursus.name}
              datum={cursus.datum}
              duur={cursus.duur}
              key={cursus.name}
            />
          );
        })}

        <div className="absolute bottom-10 left-20">
          <Link
            href="/dashboard"
            className="border-2 border-solid border-green-500 px-6 py-1"
          >
            Terug
          </Link>
        </div>
      </main>
    </div>
  );
}
