import React, { useEffect, useState } from "react";
import { fetchProducts, fetchCategoryProducts } from "../utils";
import ProductCard from "../components/productCard";
import "./styles.css";
import { ALLOWED_CATEGORIES } from "../routes";
import { useParams } from "react-router-dom";

const Products = ({ setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [activeCat, setActiveCat] = useState("All");
  const { category } = useParams();

  const handleFilteredProducts = (productCategory) => {
    const filteredProducts = allProducts.filter(
      (product) => product.category === productCategory
    );
    productCategory === "ALL"
      ? setProducts(allProducts)
      : setProducts(filteredProducts);
  };

  useEffect(() => {
    if (category) {
      const getCategoryProducts = async () => {
        const response = await fetchCategoryProducts(category);
        setProducts(response);
        setAllProducts(response);
      };
      getCategoryProducts().catch((e) => console.error("Error:", e));
    } else {
      const getProducts = async () => {
        const response = await fetchProducts();
        setProducts(response);
        setAllProducts(response);
      };
      getProducts().catch((e) => console.error("Error:", e));
    }
  }, [category]);

  return (
    <div>
      <div className="products-cont">
        {!category ? (
          <div className="category-select">
            <span
              className={`select-cat-span ${
                activeCat === "All" ? "cat-active" : ""
              }`}
              onClick={() => {
                handleFilteredProducts("ALL");
                setActiveCat("All");
              }}
            >
              All
            </span>
            <span
              className={`select-cat-span ${
                activeCat === "Women's" ? "cat-active" : ""
              }`}
              onClick={() => {
                handleFilteredProducts(ALLOWED_CATEGORIES.WOMENS);
                setActiveCat("Women's");
              }}
            >
              Women's
            </span>
            <span
              className={`select-cat-span ${
                activeCat === "Men's" ? "cat-active" : ""
              }`}
              onClick={() => {
                handleFilteredProducts(ALLOWED_CATEGORIES.MENS);
                setActiveCat("Men's");
              }}
            >
              Men's
            </span>
          </div>
        ) : (
          <div className="category-select">
            <span>{category}</span>
          </div>
        )}
      </div>
      <div className="product-card-cont">
        {products.length > 0 &&
          products.map(
            (product) =>
              product.category !== "jewelery" &&
              product.category !== "electronics" && (
                <ProductCard
                  id={product.id}
                  rating={product.rating}
                  img={product.image}
                  categoryName={product.category}
                  productName={product.title}
                  description={product.description}
                  price={product.price}
                  setCartItems={setCartItems}
                />
              )
          )}
      </div>
    </div>
  );
};

export default Products;
