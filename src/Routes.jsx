import { BrowserRouter, Routes, Route} from "react-router-dom";
import Calculate from "./components/calculate/calculate";
import Header from "./components/header/header";
import Home from "./components/Home/home";
import { useState } from "react";
import ToggleTheme from "./components/ToggleTheme/toggle";
import Protein from "./components/proteinCalc/protein";
import About from "./components/AboutUs/about";


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