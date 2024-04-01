import "./css/styles.css";
import "./css/theme.css";

import { TopHeader } from "./Components/TopHeader";
import { MainContainer } from "./Components/Layouts/MainContainer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <MainContainer>
        <Toaster />
        <TopHeader />
      </MainContainer>
    </>
  );
}

export default App;
