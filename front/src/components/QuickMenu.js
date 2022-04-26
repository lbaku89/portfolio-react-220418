import React , { Component }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


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
      ]
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
