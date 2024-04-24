import "./css/styles.css";
import "./css/theme.css";

import { MainContainer } from "./Components/Layouts/MainContainer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <MainContainer>
        <Toaster />
      </MainContainer>
    </>
  );
}

export default App;
