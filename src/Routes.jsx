import { BrowserRouter, Routes, Route} from "react-router-dom";
import Calculate from "./components/calculate/calculate";
import Header from "./components/header/header";




function AppRoutes() {
  return(
    
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={ <Calculate />}/>
      </Routes>
    </BrowserRouter>

  );

}

export default AppRoutes;