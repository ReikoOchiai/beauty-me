import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function CategoryComp() {
  const [items, setItems] = useState([]);
  let params = useParams();

  const getCategory = async (name) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
        "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://sephora.p.rapidapi.com/products/search?q=${name}&pageSize=10&currentPage=1`,
      options
    );
    const data = await api.json();

    setItems(data.products);
  };

  useEffect(() => {
    getCategory(params.type);
  }, [params.type]);

  return (
    <Grid>
      {items.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/item/" + item.productId + "/" + item.currentSku.skuId}>
              <img src={item.heroImage} alt={item.title} />
              <h4>{item.displayName}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
  grid-gap: 2rem;
`;

const Card = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default CategoryComp;
