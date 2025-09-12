export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className={"flex flex-col items-center justify-center gap-10"}>
        <div className={"flex flex-col items-center space-y-2.5"}>
          <h1 className="text-4xl font-bold">
            Weet u zeker dat u uw abonnement wilt opzeggen?
          </h1>
          <div className="flex w-full content-between">
            <button
              className={"border-2 border-solid border-red-500 px-6 py-1"}
            >
              ja
            </button>
            <button
              className={"border-2 border-solid border-green-500 px-6 py-1"}
            >
              nee
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
