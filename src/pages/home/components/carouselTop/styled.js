import styled from "styled-components";

export const CarouselImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
