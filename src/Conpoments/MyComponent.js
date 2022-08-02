import React, { useState } from 'react';
import "./Styles.css";

function MyComponent() {

    const [toggleRun, setToggleRun] = useState(false);
    const  [togglePlay, setTogglePlay] = useState(false);

    const handlePlay =()=>{
        setTogglePlay(!togglePlay)
    }

    const handleRun = ()=>{
        setToggleRun(!toggleRun)
    }


    // RandmColor generator
    
    const [color,setColor] = useState("");
    const getRgb = () => Math.floor(Math.random() * 256);

    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.lenght === 1 ? '0' + hex : hex;

    }).join('');

    const handleGenerate = () => {
        const color = {
            r : getRgb(),
            g : getRgb(),
            b : getRgb(),
        };
        setColor(rgbToHex(color.r,color.g,color.b));
    };
    

  return (
    
    
  <div className='container'>
        <div  style={{backgroundColor:color}} className='text-container'>
            <h1>Hello Container</h1>
            <p className={!toggleRun ? 'p-none':'p-show'}>hey we are looking for intership</p>
            
        </div>


        <div className='buttons-container'>
            <div className='buttons-container-left'>
                <div><button  onClick={handleRun}  id={!toggleRun ? 'Run' : 'Run-active'}><i class="fa-solid fa-play"></i>Run</button></div>
                <div><button  id={!toggleRun || togglePlay ? 'reset' : 'reset-active'}  disabled={!toggleRun}  onClick={handlePlay}><i class={!toggleRun ? "fa-solid fa-play" : "fa-solid fa-pause"}></i></button></div>
                {/* id={!toggleRun || togglePlay ? 'reset' : 'reset-active'} */}
            </div>
        
            <div className='buttons-container-right'>
                <div><button  className={!toggleRun || togglePlay ? 'arrow rigth-arrow'  : 'arrow-active' } disabled={!toggleRun}><i class="fa-solid fa-caret-left"></i></button></div>
                <div><button  className={!toggleRun || togglePlay ? 'arrow left-arrow' : 'arrow-active'} disabled={!toggleRun}><i class="fa-solid fa-caret-right"></i></button></div>
                <div><button  className={!toggleRun || togglePlay ? 'arrow top-arrow' : 'arrow-active'} disabled={!toggleRun}
                 onClick={handleGenerate}><i class="fa-solid fa-caret-up"></i></button></div>
                <div><button  className={!toggleRun || togglePlay ? 'arrow bottom-arrow' : 'arrow-active'} disabled={!toggleRun}><i class="fa-solid fa-caret-down"></i></button></div>
            </div>
        
        
        </div>
  </div>
  )
}

export default MyComponent