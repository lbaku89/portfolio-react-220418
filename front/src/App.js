// components
import Navi from './components/Navi'
import MainPage from './components/MainPage'
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import PreInterview from './components/PreInterview';
import PreInterviewModify from './components/PreInterviewModify'
import PreInterviewAdmin from './components/PreInterviewAdmin';
import ContactMe from './components/ContactMe';
import QuickMenu3 from './components/QuickMenu3';
import QuickMenu from './components/QuickMenu'
import Comment from './components/Comment';
import Footer from './components/Footer';
// import Test from './components/Test';
// import Test2 from './components/Test2';
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
      <ContactMe dbinfo={{titlenm : '리액트스트랩 모듈로 만든 폼 아마존과연동', 
          botable : 'interviewWrite',
          crud : 'insert',
          mapper : 'introduceSQL',
          mapperid : 'interviewInsert'}}>
      </ContactMe>   
      <QuickMenu></QuickMenu>
      <Comment></Comment>
      <Footer></Footer>
      {/* <Test></Test>
      <Test2></Test2> */}
    </div>
  );
}

export default App;
