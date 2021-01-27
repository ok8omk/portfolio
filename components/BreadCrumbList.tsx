import { FC } from "react";
import styled from "@emotion/styled";
import { typography } from "~/components/styled/typography";
import { color } from "~/components/styled/color";

type BreadCrumb = {
  name: string;
  url: string;
};

type Props = {
  breadCrumbs: BreadCrumb[];
};

const Container = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 24px;
  border-bottom: dashed 2px ${color.dark};
`;

const Item = styled.li`
  font-family: ${typography.strong};
  font-weight: 700;
  font-size: 18px;
  & + &::before {
    content: ">";
    margin: 0 12px;
  }
`;

const BreadCrumbList: FC<Props> = ({ breadCrumbs }) => (
  <Container>
    {breadCrumbs.map((breadCrumb, i) => (
      <Item key={breadCrumb.url}>
        {breadCrumbs.length === i + 1 ? (
          breadCrumb.name
        ) : (
          <a href={breadCrumb.url}>{breadCrumb.name}</a>
        )}
      </Item>
    ))}
  </Container>
);

export { BreadCrumbList };
