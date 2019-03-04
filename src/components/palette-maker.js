//page to make a custome palette, and has the api's list of paletes's below if a user wants to choose presets

import React from 'react'

export default function PaletteMaker(props){
    return(
        <section class="palette-maker">

            <div id="palette-maker-header" class='row' >
                <div class="col-12">
                    <div class="col-inner">
                        <header role="banner">  
                            <h1>Palette Maker</h1>
                        </header>
                        <p>[<em>placeholder for Palette maker</em>]</p>
                        <button class="btn btn-left generate">Generate</button>
                        <br/>
                        <input type='name' placeholder="Enter Name Here"></input>
                        <button>Save</button>
                    </div>
                </div>
            </div>

        </section>
    );
}