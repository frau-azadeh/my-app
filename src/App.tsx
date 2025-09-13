import "./App.css";
import Counter from "./components/Counter/Counter";
import NameForm from "./components/NameForm/NameForm";
import NameInput from "./components/NameInput/NameInput";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 space-y-6 rounded-lg">
        <header className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">React + TypeScript + Tailwind </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-6">
          <Counter />
          <NameInput />
          <NameForm />
         <Todos/>
        </main>
      </div>
    </>
  );
}

export default App;
