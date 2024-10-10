import React from "react";
import {Route, Routes} from "react-router-dom";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import UseContextPage from "./pages/UseContextPage";
import UseCallbackPage from "./pages/UseCallbackPage";
import Homepage from "./pages/Homepage";

const AppRoutes: React.FC = () => {
    return(
        <Routes>
            <Route path="/useState" element={<UseStatePage />}/>
            <Route path="/useEffect" element={<UseEffectPage />} />
            <Route path="/useContext" element={<UseContextPage />} />
            <Route path="/useCallback" element={<UseCallbackPage />} />
            <Route  path="/" element={<UseStatePage/>} />
        </Routes>
    );
}

export default AppRoutes;