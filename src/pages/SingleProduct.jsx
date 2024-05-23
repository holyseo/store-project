import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../utils";

const SingleProduct = ({ setCartItems }) => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const title = product.title;
  const price = product.price;
  const description = product.description;
  const productName = product.productName;
  const category = product.category;
  const img = product.image;

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  const getSingleProduct = async (id) => {
    const response = await fetchSingleProduct(id);
    setProduct(response);
  };

  return (
    <div className="single-product-cont">
      <div>
        <img
          className="product-image"
          src={product.image}
          alt="product-detail"
        />
      </div>
      <div className="product-detail-cont">
        <div className="product-title">{title}</div>
        <div className="product-description">{description}</div>
        <div className="product-category">{category}</div>
        <div className="product-price">Price: ${price}</div>
        <button
          className="addCart-link"
          onClick={() =>
            setCartItems((initState) => {
              return {
                totalAmount: initState.totalAmount + price,
                numberOfItems: initState.numberOfItems + 1,
                cartItems: [
                  ...initState.cartItems,
                  {
                    id: id,
                    productName: productName,
                    description: description,
                    price: price,
                    img: img,
                  },
                ],
              };
            })
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
