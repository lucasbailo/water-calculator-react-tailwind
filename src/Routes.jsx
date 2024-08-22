import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/header";
import ToggleTheme from "./components/ToggleTheme/toggle";
import Home from "./components/Home/home";
import Calculate from "./components/calculate/calculate";
import About from "./components/AboutUs/about";
import Protein from "./components/proteinCalc/protein";


function AppRoutes() {
  const [user, setUser] = useState() 

  return(
    
    <BrowserRouter>
        <Header />
        <ToggleTheme />
      <Routes>
        <Route path='/' element={ <Home onSubmit={setUser} />}/>
        <Route path='/water-calc' element={ <Calculate user={user} />}/>
        <Route path='/about-us' element={ <About />}/>
        <Route path="/protein-cal" element={ <Protein /> } />
      </Routes>
    </BrowserRouter>

  );

}

export default AppRoutes;