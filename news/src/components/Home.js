import Menu from "./Menu";
import Footer from "./Footer";
import axios from "axios";

function Home(){
  

    return (
        <div className="container">
          <Menu/>
          <h1>Home Component</h1>
          <h1 className="bg-green-400 text-red-400">Tailwind</h1>
        <Footer/>
        </div>
      );
}

export default Home;