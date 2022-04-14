import React , { Component }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export default class QuickMenu2 extends Component {
  constructor(props){
    super(props)
    this.state={
      willOpen:false,
    }
    
  }

  render() {

    const openFunction= () =>{
      this.setState({willOpen:!this.state.willOpen})


      if(this.state.willOpen){
        alert(this.state.willOpen );
      }else{
        alert(this.state.willOpen);
      }
    }

    


    return (
      <div className='fixed-bottom d-flex justify-content-end' id="QuickMenuWrap">
        <button className="void me-5" id="QuickMenuButton" onClick={ e =>{ openFunction(); } }>
          <a href='#none' className='w-100 h-100 d-flex justify-content-center align-items-center d-block'>
          <FontAwesomeIcon icon={faPlus} className="quickbutton"/>
          </a>
        </button>
        <ul className='d-flex flex-column-reverse position-relative'>
          <li className='mt-2 QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/git-hub.png'></img></a></li>
          <li className='mt-2 QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/instagram.png'></img></a></li>
          <li className='mt-2 QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/kakaotalkIcon.png'></img></a></li>
          <li className='QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/tistory.png'></img></a></li>
        </ul>
      </div>
    )
  }
}
