/** @jsx jsx */
import {css, jsx} from "@emotion/core";
function Loading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<p css={css`
    background-color: purple transparent;
    border: 1px solid #999;
    font-size: 20px;
    position: fixed;
    z-index: 99;
    `}>Be Hold, fetching data may take some time :)</p>);
  }
}
export default Loading;