import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Index from "./Pages/Index";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Index/>}/>
            </Routes>
        </Router>
    );
}

export default App;
