import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Header />} />

          <Route 
            path="/example" 
            element={
              <div className="w-full h-[400px] text-2xl sm:text-5xl flex items-center justify-center">
                "Just example page"
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
