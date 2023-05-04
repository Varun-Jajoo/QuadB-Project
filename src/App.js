import './App.css';
import Navbar from './compo/Navbar';
import Smooth from './compo/Smooth';
import Top from './compo/Top';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Review from './compo/Review';
import About from './compo/About';


function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={
                        <>
                            <div className="top "><Top /></div>
                            <Smooth  style={{backgrounColor : "white!important"}}/>
                            
                        </>
                    } />
                    <Route path="/review/:id/" element={<Review />} />
                    <Route path="/varun" element={<About/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
