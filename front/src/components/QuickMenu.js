import React , { useState }from 'react'
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import { faPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

export default function QuickMenu2() {

  const [willOpen,setWillOpen] = useState(true);
  const [loginState,setLoginState] = useState(true)
  const navigate = useNavigate();
  
  const admin = {
    id : 'lbaku89',
    password : '1569'
  }

  const quickMenuInfo = [
    {
      href:'https://github.com/lbaku89',
      imgSrc:'/img/QuickMenu/git-hub.png'
    },
    {
      href:'https://www.instagram.com/hyeok_junggg/',
      imgSrc:'/img/QuickMenu/instagram.png',
    },
    {
      href:'https://open.kakao.com/o/sIfY80ee',
      imgSrc:'/img/QuickMenu/kakaotalkIcon.png',
    },
    {
      href:'https://khj930410.tistory.com/',
      imgSrc:'/img/QuickMenu/tistory.png',
    },
  ]

  const openFunction = () =>{
    var QuickMenuWrapTag = document.getElementById("QuickMenuWrap")
    if(willOpen){
      QuickMenuWrapTag.classList.add("show")
    }
    else{
      QuickMenuWrapTag.classList.remove("show")
    }
    setWillOpen(!willOpen)
  }

  
  const checkLoginState = () => {
    if(loginState){
      loginFn();
    }else{
      logOutFn()
      }
    }
  
  const logOutFn = () =>{
    navigate("/");
    document.getElementsByClassName("loginIcon")[0].classList.remove("rotate180");
    setLoginState(true);
  }

  const loginFn=()=>{
    Swal.fire({
      title: '관리자 페이지 접속',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      if(result.value.login==admin.id&&result.value.password==admin.password){
        navigate("/admin");
        document.getElementsByClassName("loginIcon")[0].classList.add("rotate180");
        Swal.fire("관리자페이지 접속 성공")

        setLoginState(false);

      }
      else{
        Swal.fire('ID와 비밀번호를 확인해주세요')
      }
      
    })
  }  

  return (
    <div className="d-flex flex-column-reverse" id="QuickMenuWrap">
      <button className='mt-2 d-flex align-items-center justify-content-center' onClick={e=>{checkLoginState()}}><FontAwesomeIcon icon={faRightToBracket} className="loginIcon"/></button>
      <button className="d-flex align-items-center justify-content-center" id="QuickMenuButton" onClick={ e =>{ openFunction() } }>
        <FontAwesomeIcon icon={faPlus} className="quickbutton"/>
      </button>
      <ul id="QuickMenuUl"className='mb-0 d-flex flex-column-reverse position-relative p-0'>
        {
          quickMenuInfo.map((content,i)=>{
            return(
              <li className='mb-2 QuickMenuLi'><a href={content.href} target="_blank"><img src={content.imgSrc}></img></a></li>
            )
          })
        }
      </ul>
    </div>
  )
}
