import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const apiUrl = "https://fakestoreapi.com/products";

  const getProducts = async (apiUrl) => {
    try {
      const allData = await fetch(apiUrl);
      return setProducts(await allData.json());
    } catch (error) {
      console.log(Error(error));
    }
  };

  const getCategories = async (apiUrl) => {
    try {
      const allData = await fetch(`${apiUrl}/categories`);
      return setCategories(await allData.json());
    } catch (error) {
      console.log(Error(error));
    }
  };

  const filterProductsByCategory = () => {
    if (selectedCategory === "all") return products;
    return products.filter((product) => product.category === selectedCategory);
  };

  useEffect(() => {
    getProducts(apiUrl);
    getCategories(apiUrl);
  }, []);

  return (
    <>
      <section id="our-products" className="container">
        <h1 className="text-center">Our Products</h1>
        <ul className="main-list">
          <li>
            <Link onClick={() => setSelectedCategory("all")}>All</Link>
          </li>
          {categories.map((ele) => (
            <li id={ele} key={ele} onClick={() => setSelectedCategory(ele)}>
              <Link to="#">{ele}</Link>
            </li>
          ))}
        </ul>
        <div className="row">
          {filterProductsByCategory().map((ele) => (
            <div key={ele.id} className="col-3">
              <ProductCard product={ele} showDetails={true} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
