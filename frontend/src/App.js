import './App.css';
import Navbar from './components/Navbar/Navbar';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import createBlog from './pages/createBlog';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar /> 
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/add_blog' element={<createBlog />}/>

    </Routes>
    
    
    
    </BrowserRouter>
     </div>
  );
}

export default App;
