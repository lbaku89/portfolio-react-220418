import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='FooterWrap'>
        <div className='h-100 d-flex flex-column'>
          <div id="FooterIconBox"className='d-flex justify-content-center align-item-center m-auto'>
            <a href='#none'><img className='FooterIcon' src="/img/footer/git-hub.png" alt='깃헙 링크'></img></a>
            <a href='#none' className='mx-3'><img className='FooterIcon' src="/img/footer/instagram.png" alt='인스타 링크'></img></a>
            <a href='#none'><img className='FooterIcon' src="/img/footer/tistory.png" alt='티스토리 링크'></img></a>
          </div>
          <p className='FooterCopyright mb-4'>Copyright 2022. 권현우. All rights reserved.</p>
        </div>        
      </div>
    )
  }
}
