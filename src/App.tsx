import "./css/styles.css";
import "./css/theme.css";

import { MainContainer } from "./Components/Layouts/MainContainer";
import { Toaster } from "react-hot-toast";
import { TopHeader } from "./Components/TopHeader";

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
