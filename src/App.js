import Weather from "./Weather";
import Search from "./Search";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container appContainer">
        <Search />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
