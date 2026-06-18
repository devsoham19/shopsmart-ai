import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  const products = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: 55000,
    },
    {
      id: 2,
      name: "iPhone",
      price: 60000,
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 2500,
    },
  ];

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