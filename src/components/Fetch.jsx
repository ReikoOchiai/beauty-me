import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Link } from "react-router-dom";

function Fetch() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const check = localStorage.getItem("products");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
        "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      },
    };

    if (check) {
      setProducts(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://sephora.p.rapidapi.com/products/search?q=skincare&pageSize=9&currentPage=1`,
        options
      );
      const data = await api.json();

      localStorage.setItem("products", JSON.stringify(data));
      setProducts(data.products);
    }
  };

  return (
    <div>
      <Wrapper>
        <h1>Recommended Products</h1>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {products.map((product) => {
            return (
              <SplideSlide>
                <Card key={product.id}>
                  <Link
                    to={
                      "/item/" +
                      product.productId +
                      "/" +
                      product.currentSku.skuId
                    }
                  >
                    <div>
                      <p> {product.displayName} </p>
                      <img src={product.heroImage} alt={product.title} />
                    </div>
                  </Link>
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 20rem;
  min-width: 10rem;
  overflow: hidden;
  border-radius: 2rem;
  position: relative;
  margin: 2rem;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    height: 40%;
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
`;

const Gradient = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
`;
export default Fetch;
