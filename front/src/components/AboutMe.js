import React, { Component } from 'react'

export default class AboutMe extends Component {
  render() {
    return (
      <div id='AboutMeWrap'>
          <div id="AboutMeTitleBox" className="d-flex justify-contents-center"> 
            <div className='bg-primary'></div>
            <h3>About Me</h3>
            <img src='/logo/mySketch.png' className='display-inlineblock'></img>
          </div>
      </div>
    )
  }
}
