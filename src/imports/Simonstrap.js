import {createGlobalStyle} from "styled-components";
import {basic} from "../themes/basic";
export const Simonstrap = createGlobalStyle`
  @font-face {
    font-family : Icons;
    src: url(${props => props.theme.font.icon});
  }
  @font-face {
    font-family : Text;
    src: url(${props => props.theme.font.text});
  }
  *{
    font-family: Text;
  }
`;
Simonstrap.defaultProps = {theme: basic};
