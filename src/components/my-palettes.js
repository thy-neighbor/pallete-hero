//pallete my-palettes which has all of your palletes, can have a palette suggestion feature
//2 states possibly
//one that is the normal page
//second that pops out pallete maker when a pallete is clicked to quickly edit

import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import MiniPalette from './palette/mini-palette';
import {fetchProtectedData} from '../actions/protected-data';

export class MyPalettes extends React.Component{


    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    myEndpoint(end){
        window.location.href=end;

    }

    render(){
        let testRgb=[[203, 44, 18],[247, 187, 54],[231, 226, 154],[79, 166, 120],[110, 143, 84]];
        console.log("HERE IS the proateCTED DATA IN my-palette render :",this.props.protectedData);
        return(

            <section class="my-palettes">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div id="my-palettes-collection" class='row' >
                    <div class="col-12">
                        <div class="col-inner">
                            <header role="banner">  
                                <h1>My Palettes</h1>
                            </header>
        
                            <div class="row inner">
                                <div class="col-4">
                                <MiniPalette rgb={testRgb}></MiniPalette>
                                </div>
                                <div class="col-4">
                                <MiniPalette rgb={testRgb}></MiniPalette>
                                </div>
                                <div class="col-4">
                                <MiniPalette rgb={testRgb}></MiniPalette>
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
                            <button class="btn" onClick={()=>{this.myEndpoint("/home")}} type="button">Start</button>
                        </div>
                    </div>
                </div>
    
            </section>
        );
    }
}


const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(MyPalettes));
    

