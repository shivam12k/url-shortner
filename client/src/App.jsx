import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
const App = () => {
  return (
    <>
      <div className="main">
        <div className="gradient" />
        <section className="app">
          <h1 className="head_text">
            <span className="blue_gradient">Url</span> shortner
          </h1>
          <p className="text-gray-400">
          Simplify URLs, track visitors. Our URL Shortener condenses links and provides user analytics for enhanced website insights.
          </p>
        
           <div className="w-full">
           <Router>
              <Routes>
                <Route path="/" Component={Home} exact></Route>
                <Route path="/analytics/:id" Component={Analytics}></Route>
              </Routes>
            </Router>
           </div>
        
        </section>
      </div>
    </>
  );
};

export default App;
