import "./App.css";
import ContentArea from "./components/ContentArea/ContentArea";
import ForYou from "./components/ForYou/ForYou";
import Posts from "./components/Posts/Posts";
import Sidebar from "./components/Sidebar/Sidebar";
import "./css/grid.css";
import "./css/style.css";

function App() {
  return (
    <div className="row">
      <Sidebar />

      <div className="gap" />
      <ContentArea>
        <Posts />
      </ContentArea>
      <ForYou />
    </div>
  );
}

export default App;
