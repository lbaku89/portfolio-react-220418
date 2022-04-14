import React , { Component }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



export default class QuickMenu extends Component {

  constructor(props){
    super(props);
    this.state = {
      isClick : true,
      classNm : ' mt-2'
     
    }
  }

  

 

  render() {

  const  toggleStatu = () => {
      this.setState({ isClick : !this.state.isClick})   
      if(this.state.isClick){
        this.setState({ classNm :  'show mt-2' })
      }
      else{
        this.setState({ classNm :  'mt-2' })
      }
      //alert(this.state.isClick)  
  
    }
  

    // var isOpen = false;
    // var Quickbutton = document.getElementById("QuickMenuButton")

    // Quickbutton.onclick(function(){
    //   isOpen=!isOpen;
    //   if(isOpen){
    //     document.getElementsByClassName('QuickMenuLi').classList.add('show');
    //   }else{
    //     document.getElementsByClassName('QuickMenuLi').classList.remove('show');
    //   }
    // });
    // var isOpen = false;
    // var Quickbutton = document.getElementById("QuickMenuButton")

    // Quickbutton.onclick(function(){
    //   isOpen=!isOpen;
    //   if(isOpen){
    //     document.getElementsByClassName('QuickMenuLi').classList.add('show');
    //   }else{
    //     document.getElementsByClassName('QuickMenuLi').classList.remove('show');
    //   }
    // });


  
    return (

      <div className='fixed-bottom d-flex justify-content-end' id="QuickMenuWrap">
        <button className={ this.state.classNm } id="QuickMenuButton" onClick={ e =>{ toggleStatu() } }>
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

    //   <div className='fixed-bottom d-flex justify-content-end' id="QuickMenuWrap">
    //     <ul className='d-flex flex-column-reverse position-relative'>
    //       <li className='mt-2' id="QuickMenuButton">
    //         <a href='#none' className='w-100 h-100 d-flex justify-content-center align-items-center d-block'>
    //         <FontAwesomeIcon icon={faPlus} className="quickbutton"/>
    //         </a>
    //       </li>
    //       <li className='mt-2 QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/git-hub.png'></img></a></li>
    //       <li className='mt-2 QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/instagram.png'></img></a></li>
    //       <li className='mt-2 QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/kakaotalkIcon.png'></img></a></li>
    //       <li className='QuickMenuLi'><a href='#none'><img src='/img/QuickMenu/tistory.png'></img></a></li>
    //     </ul>
    // </div>
    )
  }//// render
}





// export default function QuickMenu() {
  



    
//   return (
    

//   )
// }
