import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes ,Route} from "react-router-dom";
import { BookDetailsPage } from "./Components/BookDetailsPage/BookDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>} ></Route>
        <Route path={"/bookDetailsPage/id:"} element={<BookDetailsPage/>} ></Route>
        
      
        
      </Routes>
      {/* <BookDetailsPage/> */}
    </div>
  );
}

export default App;
