import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductCard from "./components/ProductCard/ProductCard";

import products from "./Data/Product";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <SearchBar />

        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </main>
    </>
  );
}

export default App;