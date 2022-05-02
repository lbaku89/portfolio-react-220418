import React , { Component, useState }from 'react'
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import { faPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import {useNavigate,Link,useParams} from 'react-router-dom'

export default function QuickMenu2() {

  [willOpen,setWillOpen] = useState(0)

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
      href:'#none',
      imgSrc:'/img/QuickMenu/kakaotalkIcon.png',
    },
    {
      href:'https://khj930410.tistory.com/',
      imgSrc:'/img/QuickMenu/tistory.png',
    },
  ]

  
  const openFunction = () =>{
    var QuickMenuWrapTag = document.getElementById("QuickMenuWrap")
    if(this.state.willOpen){
      QuickMenuWrapTag.classList.add("show")
    }
    else{
      QuickMenuWrapTag.classList.remove("show")
    }
    this.setState({willOpen:!this.state.willOpen})
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
      navigate("/modify");
    })
  }  

  return (
    <div className="d-flex flex-column-reverse" id="QuickMenuWrap">
      <button className='mt-2 d-flex align-items-center justify-content-center' onClick={e=>{loginFn()}}><FontAwesomeIcon icon={faRightToBracket} className="loginIcon"/></button>
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
