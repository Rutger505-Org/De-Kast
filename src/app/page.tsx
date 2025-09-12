import SignInForm from "@/app/_components/sign-in-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/server/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-20">
      <h1 className={"text-4xl font-semibold"}>De Kast</h1>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Inloggen</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </main>
  );
}
