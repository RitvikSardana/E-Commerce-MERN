import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import axios from "axios";
import Product from "./Product";

const Products = ({ category, filters, sort }) => {
  // console.log(category, filters, sort);

  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  // For Category
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `https://e-commerce-backend.up.railway.app/api/products?category=${category}`
            : "https://e-commerce-backend.up.railway.app/api/products"
        );
        const {
          data: { data },
        } = res;
        // console.log(data)
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  // For Filter
  useEffect(() => {
    category &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);

  //For Sort
  useEffect(() => {
    setFilterProducts((prev) =>
      [...prev].sort((a, b) =>
        sort == "newest"
          ? a.createdAt - b.createdAt
          : sort == "asc"
          ? a.price - b.price
          : b.price - a.price
      )
    );
    // sortedProducts.sort((a,b)=> sort ==="lowToHigh"? a.price-b.price :b.price-a.price )
  }, [sort]);


  return (
    <Container>
      {category
        ? filterProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Products;
