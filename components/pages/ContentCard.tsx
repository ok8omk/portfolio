import type { FC } from "react";
import styled from "@emotion/styled";
import { typography } from "~/components/styled/typography";
import { color } from "~/components/styled/color";

type Props = {
  href: string;
  icon: string;
  description: string;
};

const Card = styled.a`
  border: solid 2px ${color.dark};
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  & > * + * {
    margin-left: 16px;
  }
  &:hover {
    background: ${color.mid};
    color: ${color.light};
  }
`;

const Icon = styled.img`
  width: 64px;
  height: 64px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 8px;
  }
`;

const Path = styled.span`
  font-family: ${typography.strong};
  font-weight: 700;
  font-size: 18px;
`;

const Description = styled.span`
  font-weight: 700;
  font-size: 14px;
`;

const ContentCard: FC<Props> = ({ href, icon, description }) => (
  <Card href={href}>
    <Icon src={icon} />
    <TextContainer>
      <Path>{href}</Path>
      <Description>{description}</Description>
    </TextContainer>
  </Card>
);

export { ContentCard };
