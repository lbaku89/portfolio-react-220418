// components
import Navi from './components/Navi'
import MainPage from './components/MainPage'
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
    <div className='wrap'>
      <Navi></Navi>
      <MainPage></MainPage>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
