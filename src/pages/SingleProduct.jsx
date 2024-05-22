import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../utils";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  const getSingleProduct = async (id) => {
    const response = await fetchSingleProduct(id);
    setProduct(response);
  };

  return <div>{product.title}</div>;
};

export default SingleProduct;
