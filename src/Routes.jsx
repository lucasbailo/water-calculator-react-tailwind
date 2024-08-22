import { BrowserRouter, Routes, Route} from "react-router-dom";
import Calculate from "./components/calculate/calculate";
import Header from "./components/header/header";
import Home from "./components/Home/home";
import { useState } from "react";
import AboutUs from "./components/AboutUs/aboutUs";
import ToggleTheme from "./components/ToggleTheme/toggle";
import ProteinCalculate from "./components/proteinCalc/proteinCalc";


function AppRoutes() {
  const [user, setUser] = useState() 

  return(
    
    <BrowserRouter>
        <Header />
        <ToggleTheme />
      <Routes>
        <Route path='/' element={ <Home onSubmit={setUser} />}/>
        <Route path='/water-calc' element={ <Calculate user={user} />}/>
        <Route path='/about-us' element={ <AboutUs />}/>
        <Route path="/protein-cal" element={<ProteinCalculate />} />
      </Routes>
    </BrowserRouter>

  );

}

export default AppRoutes;