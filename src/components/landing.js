//

import React from "react";



export default function Landing(props){
    return(
        <section class="landing">

            <div id="landing-header" class='row' >
                <div class="col-12">
                    <div class="col-inner">
                        <header role="banner">  
                            <h1>Palette Hero</h1>
                            <h2>save your color</h2>
                        </header>
                    </div>
                </div>
            </div>

            <div id="landing-description" class="row">
                <div class="col-12">
                    <div class="col-inner">
                        <header>
                            <h3>Create and Save a palette</h3>
                        </header>
                        <p>[<em>placeholder for palette maker</em>]</p>
                        <p>Palette Hero uses the colormind.io api to help you make your own
                            palette aided by an AI, then name and save your creation
                        </p>
                    </div>
                </div>
            </div>

            <div id="landing-buttons" class="row">
                <div class="col-12">
                    <div class="col-inner">
                        <header>
                            <h3>Start making Palettes</h3>
                        </header>
                        <button class="btn login">Login</button>
                        <button class="btn signup">SignUp</button>
                    </div>
                </div>    
            </div>

        </section>
    );
}