import React , { Component }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default class QuickMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      willOpen:true,
      quickMenuInfo:[
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
      ],
      admin:{
        id:"lbaku89",
        password:"1569"
      }
    }
  }

  openFunction = () =>{
    var QuickMenuWrapTag = document.getElementById("QuickMenuWrap")
    if(this.state.willOpen){
      QuickMenuWrapTag.classList.add("show")
    }
    else{
      QuickMenuWrapTag.classList.remove("show")
    }
    this.setState({willOpen:!this.state.willOpen})
  }

  loginFn = () =>{
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
      // Swal.fire(`
      //   Login: ${result.value.login}
      //   Password: ${result.value.password}
      // `.trim())
      
      if(result.value.login == this.state.admin.id && result.value.password == this.state.admin.password)
      {
        Swal.fire(
          <Link to={'/preInterviewModify/'}>접속</Link>
        )    

    
      }
      else{
        Swal.fire("id와 password를 확인해주세요")
      }
    })
  }  

  render(){
    return (
      <div className="d-flex flex-column-reverse" id="QuickMenuWrap">
          <button className='mt-2 d-flex align-items-center justify-content-center' onClick={e=>{this.loginFn()}}><FontAwesomeIcon icon={faRightToBracket} className="loginIcon"/></button>
          <button className="d-flex align-items-center justify-content-center" id="QuickMenuButton" onClick={ e =>{ this.openFunction() } }>
            <FontAwesomeIcon icon={faPlus} className="quickbutton"/>
          </button>
          <ul id="QuickMenuUl"className='mb-0 d-flex flex-column-reverse position-relative p-0'>
            {
              this.state.quickMenuInfo.map((content,i)=>{
                return(
                  <li className='mb-2 QuickMenuLi'><a href={content.href} target="_blank"><img src={content.imgSrc}></img></a></li>
                )
              })
            }
          </ul>
      </div>
    )
  }
}
