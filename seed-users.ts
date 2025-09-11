import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { account, user } from "@/server/db/schema";
import { randomUUID } from "crypto";

async function seed() {
  const plainPassword = "secret";

  const authHelpers = await auth.$context;
  const hashedPassword = await authHelpers.password.hash(plainPassword);

  await Promise.all(
    [
      {
        id: "1",
        name: "One time",
        email: "onetime@example.com",
      },
      {
        id: "2",
        name: "One time with Addon",
        email: "onetimewithaddon@example.com",
      },
      {
        id: "3",
        name: "Two time",
        email: "twotime@example.com",
      },
      {
        id: "4",
        name: "Two time with Addon",
        email: "twotimewithaddon@example.com",
      },
      {
        id: "5",
        name: "Unlimited",
        email: "unlimited@example.com",
      },
      {
        id: "6",
        name: "Unlimited with addon",
        email: "unlimitedwithaddon@example.com",
      },
    ].map(async (u) => {
      await db.insert(user).values({
        ...u,
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await db.insert(account).values({
        id: randomUUID(),
        accountId: `${u.email}-local`,
        providerId: "credentials",
        userId: u.id,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      console.log(
        `✅ User seeded: ${u.name} (${u.email}) with password "${plainPassword}"`,
      );
    }),
  );
}

seed()
  .then(() => {
    console.log("🌱 Seeding complete");
    process.exit(0);
  })
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    console.log("Was the database already seeded?");
    process.exit(1);
  });
