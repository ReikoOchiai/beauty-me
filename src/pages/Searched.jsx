import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearched = async (input) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
        "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://sephora.p.rapidapi.com/products/search?q=${input}&pageSize=10&currentPage=1`,
      options
    );
    const data = await api.json();

    setSearched(data.products);
  };

  useEffect(() => {
    getSearched(params.input);
  }, [params.input]);

  return (
    <Grid>
      {searched.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.heroImage} alt={item.title} />
            <h4>{item.displayName}</h4>
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

export default Searched;
