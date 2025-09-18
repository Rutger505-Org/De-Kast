interface Props {
  name: string;
  datum: string;
  duur: string;
}

export default function Cursus({ name, duur, datum }: Readonly<Props>) {
  return (
    <div className="border- border-solid-2 flex w-full items-center justify-center gap-5 border-2 border-black px-2 py-3">
      <div className="w-50 h-50 bg-gray-500 p-10">IMG</div>
      <div>
        <h2 className="text-xl">{name}</h2>
        <p>{datum}</p>
        <p>{duur}</p>
      </div>
      <div>
        <button className="border-2 border-solid border-green-500 px-6 py-1">
          Inschrijven
        </button>
      </div>
    </div>
  );
}
