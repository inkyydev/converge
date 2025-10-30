import Header from "./scenes/nav/HeaderNav";
import Homepage from "./scenes/homepage/Homepage";
import Footer from "./scenes/nav/Footer";

function App() {
  return (
    <div className="fl-page">
      <Header />
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
