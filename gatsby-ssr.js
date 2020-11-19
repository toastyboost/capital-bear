// const React = require("react");
// const GlobalStyles = require("./src/styles/defaults");

// export const onRenderBody = ({ setHeadComponents }) => {
//   const str = GlobalStyles.default.join("");

//   setHeadComponents([
//     <style key="global-styles" type="text/css" dangerouslySetInnerHTML={{ __html: str }} />,
//   ]);
// };

export { default as wrapRootElement } from "./src/store/ReduxWrapper";
