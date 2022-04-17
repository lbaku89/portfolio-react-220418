import React , { Component }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export default class QuickMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      willOpen:true
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

  

  render(){
    return (
      <div className="d-flex flex-column-reverse" id="QuickMenuWrap">
          <button className="d-flex align-items-center justify-content-center" id="QuickMenuButton" onClick={ e =>{ this.openFunction() } }>
            <FontAwesomeIcon icon={faPlus} className="quickbutton"/>
          </button>
          <ul id="QuickMenuUl"className='mb-0 d-flex flex-column-reverse position-relative p-0'>
            <li className='mb-2 QuickMenuLi'><a href='https://github.com/lbaku89' target="_blank"><img src='/img/QuickMenu/git-hub.png'></img></a></li>
            <li className='mb-2 QuickMenuLi'><a href='https://www.instagram.com/hyeok_junggg/' target="_blank"><img src='/img/QuickMenu/instagram.png'></img></a></li>
            <li className='mb-2 QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/kakaotalkIcon.png' target="_blank"></img></a></li>
            <li className='mb-2 QuickMenuLi'><a href='https://khj930410.tistory.com/' target="_blank"><img src='/img/QuickMenu/tistory.png'></img></a></li>
          </ul>
      </div>
    )
  }
}
