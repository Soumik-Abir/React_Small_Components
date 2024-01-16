import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian />

      {/* Random color */}
      <RandomColor />

      {/* Star-rating */}
      <StarRating noOfStars={10}/>

      {/* Image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
        style={{display: "flex", alignItems: "center", justifyContent: "center" }}
      />

      {/* Load more products component */}
      <LoadMoreData/>

      {/* Tree view component/menu UI component / recursive navigation menu */}
      <TreeView menus={menus} />

      {/* QR code generator */}
      <QRCodeGenerator/>

      {/* light and dark theme switch */}
      <LightDarkMode/>
    </div>
  );
}

export default App;
