import styled from "@emotion/styled";
import { typography } from "~/components/styled/typography";

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const Title = styled.h1`
  margin: 0;
  font-family: ${typography.strong};
  font-weight: 700;
  font-size: 36px;
  & > a {
    text-decoration: none;
  }
`;

const Header = () => (
  <Container>
    <Title>
      <a href="/">ok8omk</a>
    </Title>
  </Container>
);

export { Header };
