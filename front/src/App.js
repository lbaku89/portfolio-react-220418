// components
import Navi from './components/Navi'
import MainPage from './components/MainPage'
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import PreInterview from './components/PreInterview';
import PreInterviewModify from './components/PreInterviewModify'
import PreInterviewAdmin from './components/PreInterviewAdmin';
import ContactMe from './components/ContactMe';
import QuickMenu from './components/QuickMenu'
import Comment from './components/Comment';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='wrap'>
      <Navi></Navi>
      <MainPage></MainPage>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Routes>
        <Route path='/' element={
          <PreInterview>
          </PreInterview>}>
        </Route>
        <Route path='/admin' element={
          <PreInterviewAdmin>
          </PreInterviewAdmin>}>
        </Route>
        <Route path='/interviewModify/:no' element={
         <PreInterviewModify>
         </PreInterviewModify>}>
        </Route>  
      </Routes>
      <ContactMe></ContactMe>   
      <QuickMenu></QuickMenu>
      <Comment></Comment>
      <Footer></Footer>
    </div>
  );
}

export default App;
