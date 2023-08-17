import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const apiUrl = "https://fakestoreapi.com/products";
  const getProductDetails = async (apiUrl) => {
    try {
      const allData = await fetch(apiUrl);
      return setProduct(await allData.json());
    } catch (error) {
      console.log(Error(error));
    }
  };
  useEffect(() => {
    getProductDetails(`${apiUrl}/${params.productId}`);
  }, [params.productId]);
  return <ProductCard product={product} showDetails={false} />;
}
