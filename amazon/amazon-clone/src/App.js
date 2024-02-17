import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // Router lets us navigate different pages without refresh. 
    <Router>
        <div className="app">
            <Routes>
                <Route path="/checkout" element={ <h1>checkout</h1> }/>
                <Route path="/login" element={ <h1>login</h1> }/>
                {/* This is the default route */}
                <Route path="/" element={ <h1> HOME PAGE!!! </h1> }/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;