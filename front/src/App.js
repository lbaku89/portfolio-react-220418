// components
import Navi from './components/Navi'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
    <div className='wrap'>
      <Navi></Navi>
      <MainPage></MainPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
