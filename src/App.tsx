import { CSSReset } from "@chakra-ui/react";
import { MainRouter as Routes } from "./routes";

const App = () => {
  return (
    <>
      <CSSReset />
      <Routes />
    </>
  );
};

export default App;
