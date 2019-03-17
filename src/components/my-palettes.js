//pallete my-palettes which has all of your palletes, can have a palette suggestion feature
//2 states possibly
//one that is the normal page
//second that pops out pallete maker when a pallete is clicked to quickly edit

import React from 'react'

export default function MyPalettes(props){

    function myEndpoint(end){
        window.location.href=end;

    }

    return(

        <section class="my-palettes">

        <div id="my-palettes-collection" class='row' >
            <div class="col-12">
                <div class="col-inner">
                    <header role="banner">  
                        <h1>My Palettes</h1>
                    </header>

                    <div class="row inner">
                        <div class="col-4">
                        <p>[<em>placeholder for Palette maker</em>]</p>
                        </div>
                        <div class="col-4">
                        <p>[<em>placeholder for Palette maker</em>]</p>
                        </div>
                        <div class="col-4">
                        <p>[<em>placeholder for Palette maker</em>]</p>
                        </div>
                    </div>

                    <div class="row inner">
                        <div class="col-4">
                        <p>[<em>placeholder for Palette maker</em>]</p>
                        </div>
                        <div class="col-4">
                        <p>[<em>placeholder for Palette maker</em>]</p>
                        </div>
                        <div class="col-4">
                        <p>[<em>placeholder for Palette maker</em>]</p>
                        </div>
                    </div>

                    <div class="row inner">
                        <div class="col-4">
                        <p>[<em>placeholder for Palette maker</em>]</p>
                        </div>
                        <div class="col-4">
                        <p>[<em>placeholder for Palette maker</em>]</p>
                        </div>
                        <div class="col-4">
                        <p>[<em>placeholder for Palette maker</em>]</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="my-palettes-buttons" class="row">
            <div class="col-12">
                <div class="col-inner">
                    <header>
                        <h3>Start New Palette</h3>
                    </header>
                    <button class="btn" onClick={()=>{myEndpoint("/home")}} type="button">Start</button>
                </div>
            </div>
        </div>

        </section>
    );
}

