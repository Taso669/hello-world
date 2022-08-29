import "./App.scss";
import Taso from "./component/header.js";
import MidComp from "./component/mid-comp";
import BotComp from "./component/bottom-comp"

const App = () => {
  return (
    <div>
      <Taso />
      <hr></hr>
      <MidComp />
      <hr></hr>
      <BotComp />
    </div>
  );
};

export default App;
