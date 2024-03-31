import "./css/styles.css";
import "./css/theme.css";

import { TopHeader } from "./Components/TopHeader";
import { MainContainer } from "./Components/Layouts/MainContainer";

function App() {
  return (
    <>
      <MainContainer>
        <TopHeader />
      </MainContainer>
    </>
  );
}

export default App;
