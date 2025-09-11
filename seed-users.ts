import { db } from "@/server/db";
import { account, user } from "@/server/db/schema";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

async function seed() {
  const userId = randomUUID();

  // Maybe hardcoded id to prevent double seed?

  // hash the password with bcrypt
  const plainPassword = "secret";
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const users = [
    {
      id: 1,
      name: "One time",
      email: "onetime@example.com",
    },
    {
      id: 2,
      name: "One time with Addon",
      email: "onetimewithaddon@example.com",
    },
    {
      id: 3,
      name: "Two time",
      email: "twotime@example.com",
    },
    {
      id: 4,
      name: "Two time with Addon",
      email: "twotimewithaddon@example.com",
    },
    {
      id: 5,
      name: "Unlimited",
      email: "unlimited@example.com",
    },
    {
      id: 6,
      name: "Unlimited with addon",
      email: "unlimitedwithaddon@example.com",
    },
  ];

  // create the user
  await db.insert(user).values({
    id: userId,
    name: "One time",
    email: "alice@example.com",
    emailVerified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  // link an account with hashed password
  await db.insert(account).values({
    id: randomUUID(),
    accountId: "alice-local",
    providerId: "credentials", // must match how you configured better-auth
    userId,
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  console.log(
    `✅ User seeded: alice@example.com with password "${plainPassword}"`,
  );
}

seed().then(() => {
  console.log("🌱 Seeding complete");
  process.exit(0);
});
