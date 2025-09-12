"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>De afspraak is succevol gemaakt</CardTitle>
        </CardHeader>
        <CardContent>
          <p>op: </p>
          <p>om: </p>
        </CardContent>
      </Card>
    </div>
  );
}
