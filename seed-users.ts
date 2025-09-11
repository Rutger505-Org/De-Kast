import { auth } from "@/server/auth";

async function seed() {
  const plainPassword = "password";

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
        email: "twotimes@example.com",
      },
      {
        id: "4",
        name: "Two time with Addon",
        email: "twotimeswithaddon@example.com",
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
      await auth.api.signUpEmail({
        body: {
          ...u,
          password: plainPassword,
        },
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
    process.exit(1);
  });
