import styled from "styled-components";

// Styled Components
export const About = styled.div`
  // CSS CODES
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 7rem;
  width: 95%;
  margin: 0 auto;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 3rem;
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
