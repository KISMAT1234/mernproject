import Menu from "./Menu";
import Footer from "./Footer";
import axios from "axios";

function Home(){
  

    return (
        <div className="container">
          <Menu/>
          <h1>Home Component</h1>
        <Footer/>
        </div>
      );
}

export default Home;