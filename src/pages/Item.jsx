import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Item() {
  const [details, setDetails] = useState({});
  const [baseDetails, setBaseDetails] = useState({});
  const [activeButton, setActiveButton] = useState("how To");

  let params = useParams();

  const getItem = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
        "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://sephora.p.rapidapi.com/products/detail?productId=${params.id}&preferedSku=${params.sku}`,
      options
    );
    if (!api.ok) {
      throw new Error("Fetching failed");
    }

    const data = await api.json();
    setBaseDetails(data);
    setDetails(data.currentSku);

    // console.log(baseDetails);
    // console.log(details);
  };

  // console.log(details?.skuImages?.image135);

  useEffect(() => {
    getItem();
  }, [params.id, params.sku]);

  return (
    <DetailWrapper>
      <div>
        <img
          src={details?.skuImages?.image135}
          alt={baseDetails?.displayName}
        />
        <h3>{baseDetails?.displayName}</h3>
      </div>
      <Info>
        <Button
          onClick={() => setActiveButton("how to")}
          className={activeButton === "how to" ? "active" : ""}
        >
          How To
        </Button>
        <Button
          onClick={() => setActiveButton("ingredients")}
          className={activeButton === "ingredients" ? "active" : ""}
        >
          Ingredients
        </Button>
        {activeButton === "how to" && (
          <div>
            <p
              dangerouslySetInnerHTML={{ __html: baseDetails.shortDescription }}
            ></p>
            {/* {details.ingredientDesc?.replace(/<b|br\s*\\?>|r>-?|-{1}|<\/b>/g, " ")} */}
          </div>
        )}

        {activeButton === "ingredients" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.ingredientDesc }}></p>
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin: auto 2rem;
  display: flex;
  justify-content: center;
  img {
    height: 10rem;
    margin: 1rem;
  }
  .active {
    background: linear-gradient(35deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2));
    color: white;
  }
`;

const Button = styled.button`
  padding: 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin: 2rem;
`;

export default Item;
