import React from "react";
import AppRoutes from "./AppRoutes";
import Homepage from "./pages/Homepage";
import {BrowserRouter} from "react-router-dom";

const App: React.FC = () => {


  return (
      <div>
          <BrowserRouter>
              <div className="container mx-auto mt-10 content-between ">
                  < Homepage />
                  < AppRoutes />
              </div>

          </BrowserRouter>
      </div>
  );

};

export default App;
