"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PositiveButton } from "@/components/ui/kastbuttonpositive";
import { useRouter, useSearchParams } from "next/navigation";

export default function SuccesPage() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const time = searchParams.get("time");
  const date = searchParams.get("date");

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>De afspraak is succevol gemaakt</CardTitle>
        </CardHeader>
        <CardContent>
          <p>op: {time ?? "niet opgegeven"}</p>
          <p>om: {date ?? "niet opgegeven"}</p>

          <PositiveButton onClick={() => router.push("/dashboard")}>
            Terug naar dashboard
          </PositiveButton>
        </CardContent>
      </Card>
    </div>
  );
}
