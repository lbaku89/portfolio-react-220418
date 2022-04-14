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

    const openFunction= (index) =>{
      this.setState({willOpen:!index})
      console.log(this.state.willOpen);
      if(this.state.willOpen){
       var check = document.getElementsByClassName("QuickMenuLi")
       console.log(check);
       for(var i=0; i<check.length ;i++){
        check[i].classList.add('show');
       }
      }else{

      }
    }

    


    return (
      <div class="d-flex flex-column-reverse" id="QuickMenuWrap">
          <button className="d-flex align-items-center justify-content-center" id="QuickMenuButton" onClick={ e =>{ openFunction(this.state.willOpen); } }>
            <FontAwesomeIcon icon={faPlus} className="quickbutton"/>
          </button>
          <ul id="QuickMenuUl"className='mb-0 d-flex flex-column-reverse position-relative p-0'>
            <li className='mb-2 QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/git-hub.png'></img></a></li>
            <li className='mb-2 QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/instagram.png'></img></a></li>
            <li className='mb-2 QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/kakaotalkIcon.png'></img></a></li>
            <li className='mb-2 QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/tistory.png'></img></a></li>
          </ul>
      </div>
    )
  }
}
