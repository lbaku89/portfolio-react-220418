// components
import Navi from './components/Navi'
import MainPage from './components/MainPage'
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import PreInterview from './components/PreInterview';
import ContactMe from './components/ContactMe';
import QuickMenu from './components/QuickMenu';
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
      <PreInterview dbinfo={{
        titlenm:'아마존 인터뷰목록',
        botable:'interviewList',
        crud:'select',
        mapper:'introduceSQL',
        mapperid : 'interviewList'
      }}>
      </PreInterview>
      <Routes>
        <Route path='/' element={<ContactMe dbinfo={{
          titlenm : '리액트스트랩 모듈로 만든 폼 아마존과연동', 
          botable : 'interviewWrite',
          crud : 'insert',
          mapper : 'introduceSQL',
          mapperid : 'interviewInsert'
          }}></ContactMe>}>
        </Route>
      </Routes>     
      <QuickMenu></QuickMenu>
      <Comment></Comment>
      <Footer></Footer>
    </div>
  );
}

export default App;
