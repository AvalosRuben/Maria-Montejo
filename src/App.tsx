import TopBar from "./components/TopBar";
import "./index.css";

function App() {
  return (
    <>
      <TopBar />
      <div className="w-screen h-screen bg-accent flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-9xl text-foreground font-serif">
            Maria & Montejo
          </h1>
          <p className="text-4xl text-foreground font-serif">Próximamente...</p>
        </div>
      </div>
    </>
  );
}

export default App;
