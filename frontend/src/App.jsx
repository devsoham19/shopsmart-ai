import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <SearchBar />
        <ProductList />
      </main>
    </>
  );
}

export default App;