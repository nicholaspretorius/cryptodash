import styled from "styled-components";
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow } from "./Styles";

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
    padding: 1em;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;
