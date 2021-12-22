import Weather from "./Weather";
import Search from "./Search";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
