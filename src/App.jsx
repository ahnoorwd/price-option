
import Mynavbar from "./components/navbar/buildnavabr/Mynavbar";
import Jympriceoption from "./components/priceoptioninjym/Jympriceoption";
import Barchat from "./linecharts/barchart/Barchat";
import Linecharts from "./linecharts/Linecharts";



const App = () => {
   return (
    <div>
      {/* <Navbar></Navbar> */}
      <Mynavbar></Mynavbar>
      <Jympriceoption></Jympriceoption>
     <Linecharts></Linecharts>
     <Barchat></Barchat>
      
    </div>
  );
};

  export default App;