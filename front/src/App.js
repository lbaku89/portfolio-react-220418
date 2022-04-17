// components
import Navi from './components/Navi'
import MainPage from './components/MainPage'
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import PreInterview from './components/PreInterview';
import ContactMe from './components/ContactMe';
import QuickMenu from './components/QuickMenu';
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
      <PreInterview></PreInterview>
      <ContactMe></ContactMe>
      <QuickMenu></QuickMenu>
      <Footer></Footer>
    </div>
  );
}

export default App;
