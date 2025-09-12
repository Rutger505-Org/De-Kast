import { auth } from "@/server/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className={"flex flex-col items-center justify-center gap-10"}>
        <div className={"flex flex-col items-center space-y-2.5"}>
          <h1 className="text-4xl font-bold">Coach</h1>
          <h2 className={"max-w-md text-center text-3xl font-bold"}>
            {session?.user.name}
          </h2>
        </div>
      </main>
    </div>
  );
}
