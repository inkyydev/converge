import Header from "./scenes/nav/HeaderNav";
import Homepage from "./scenes/homepage/Homepage";

function App() {
  return (
    <div className="fl-page">
      <Header />
      <main>
        <Homepage />
      </main>
    </div>
  );
}

export default App;
