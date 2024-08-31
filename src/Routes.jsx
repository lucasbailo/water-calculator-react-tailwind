import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./components/AboutUs";
import Header from "./components/header";
import ToggleTheme from "./components/ToggleTheme";
import Home from "./components/Home";
import Calculate from "./components/calculate";
import Protein from "./components/proteinCalc";


function AppRoutes() {
  const [user, setUser] = useState() 

  return(
    
    <BrowserRouter>
        <Header />
        <ToggleTheme />
      <Routes>
        <Route path='/' element={ <Home onSubmit={setUser} />}/>
        <Route path='/water-calc' element={ <Calculate user={user} />}/>
        <Route path='/about-us' element={ <About/>}/>
        <Route path="/protein-cal" element={ <Protein user={user} /> } />
      </Routes>
    </BrowserRouter>

  );

}

export default AppRoutes;