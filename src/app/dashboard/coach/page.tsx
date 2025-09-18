"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NegativeButton } from "@/components/ui/kastbuttonnegative";
import { PositiveButton } from "@/components/ui/kastbuttonpositive";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CoachPage() {
  const router = useRouter();

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  function validate(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({ time, date }).toString();
    router.push(`/dashboard/coach/succes?${params}`);
  }

  const handleRouting = () => {
    router.push(`/dashboard`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Maak een afspraak met een personal trainer</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={validate} className="space-y-4">
            <div>
              <Label htmlFor="time">Kies een tijd</Label>
              <Input
                type="time"
                value={time}
                required
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="date">Kies een datum</Label>
              <Input
                type="date"
                value={date}
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <PositiveButton type="submit">Maak afspraak</PositiveButton>
            <NegativeButton onClick={handleRouting}>Annuleer</NegativeButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
