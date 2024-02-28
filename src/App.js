import { BrowserRouter, Route , Routes} from "react-router-dom";

import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./components/pages/Home";
import Locationvideos from "./components/pages/Location-videos";
import AllLocation from "./components/pages/All-location";
import Truckparking from "./components/pages/Truck-parking"; 
import Alabama from "./components/pages/Alabama-location";
import Signin from "./components/auth/Sign-in";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
       <BrowserRouter basename="/CMS/storemytruck">
     <Routes>
          <Route index element={<Home />} />
          <Route path="/locationvideos" element={<Locationvideos />} />
          <Route path="/AllLocation" element={<AllLocation />} />
          <Route path="/truck" element={<Truckparking />} />
          <Route path="/alabama-location" element={<Alabama/>} />
          <Route path="/sign-in" element={<Signin/>} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
