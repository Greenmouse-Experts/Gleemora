import './App.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Page/Home';
import Footer from './components/Footer';
import Story from './Page/Story';
import About from './Page/About';
import Contact from './Page/Contact';
import Celeb from './Page/Celeb';
import Faq from './Page/Faq';
import Policy from './Page/Policy';
import ScrollToTop from './components/ScrollToTop';
 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='story'element={<Story/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='mission' element={<Celeb/>}/>
          <Route path='faq' element={<Faq/>}/>
          <Route path='policy' element={<Policy/> }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
