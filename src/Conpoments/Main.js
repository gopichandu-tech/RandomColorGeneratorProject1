import React from 'react'
import "./Styles.css"

function Main() {
  return (
    <div className='main'>
        <header className='container'>
            <h1>Please Enter Your name</h1>
            <p>have you entered </p>
        
        </header>

        <div className='buttons'>

          <div className='buttons-top'>
            <button id='run'><i class="fa-solid fa-play"></i>Run</button>
            <button id='reset'><i class="fa-solid fa-pause"></i></button>
          </div>
          
          <div className='button-arrows'>
            <button className='buttons-bottom' id='left-arrow'><i class="fa-solid fa-caret-left"></i></button>
            <button className='buttons-bottom' id='right-arrow'><i class="fa-solid fa-caret-right"></i></button>
            <button className='buttons-bottom'id='top-arrow'><i class="fa-solid fa-caret-up"></i></button>
            <button className='buttons-bottom' id='bottom-arrow'><i class="fa-solid fa-caret-down"></i></button>
          </div>
          

        </div>


        
    </div>
  )
}

export default Main