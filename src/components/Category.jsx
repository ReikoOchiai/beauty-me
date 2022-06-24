import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/categorycomp/all"}>
        <img src="/img/allSkincare.png" alt="All" />
        <p>All</p>
      </SLink>
      <SLink to={"/categorycomp/cleanser"}>
        <img src="/img/cleanser.png" alt="Cleanser" />
        <p>Cleanser & Exfoliator</p>
      </SLink>
      <SLink to={"/categorycomp/toner"}>
        <img src="/img/toner.png" alt="Toner" />
        <p>Toner</p>
      </SLink>
      <SLink to={"/categorycomp/cream"}>
        <img src="/img/moisturizer.png" alt="Moisturiser" />
        <p>Moisturiser</p>
      </SLink>
      <SLink to={"/categorycomp/face mask"}>
        <img src="/img/mask-treatments.png" alt="Masks & Treatments" />
        <p>Masks & Treatments</p>
      </SLink>
      <SLink to={"/categorycomp/sun cream"}>
        <img src="/img/suncare-set.png" alt="Sun Care" />
        <p>Sun Care</p>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: space-between;

  img {
    height: 4rem;
  }

  p {
    font-size: 0.8rem;
  }

  a {
    text-decoration: none;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Category;
