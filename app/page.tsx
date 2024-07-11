import DeelLogo from "./components/DeelLogo";
import SearchComponent from "./components/SearchComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center flex flex-col items-center gap-4">
        <DeelLogo />
        <h1 className="text-4xl font-bold">React Challenge</h1>
        <h2 className="text-2xl">Pokémon Search</h2>
        <SearchComponent />
      </div>
    </main>
  );
}
