//pallete my-palettes which has all of your palletes, can have a palette suggestion feature
//2 states possibly
//one that is the normal page
//second that pops out pallete maker when a pallete is clicked to quickly edit

import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import MiniPalette from './palette/mini-palette';
import PaletteList from './palette/palette-list';
import {fetchProtectedData, fetchPaletteData} from '../actions/protected-data';
import './dashboard.css';

export class Dashboard extends React.Component{


    componentDidMount() {
        //this.props.dispatch(fetchProtectedData());
        this.props.dispatch(fetchPaletteData());
    }

    render(){
        let testRgb=[[203, 44, 18],[247, 187, 54],[231, 226, 154],[79, 166, 120],[110, 143, 84]];
        console.log("HERE IS the PALETTE DATA IN dashboard render :",this.props.paletteData);

        return(

            <section class="my-palettes">
                <div id="my-palettes-collection" class='row' >
                    <div class="col-12">
                        <div class="col-inner">
                            <div class="dashboard-username">
                                <h5>User: <em>{this.props.username}</em></h5>
                            </div>
                            <br/>
                            <header role="banner">  
                                <h1>My Palettes</h1>
                            </header>
        
                            {this.props.paletteData!=="" && <PaletteList paletteData={this.props.paletteData}></PaletteList>}
    
                        </div>
                    </div>
                </div>
    
                <div id="my-palettes-buttons" class="row">
                    <div class="col-12">
                        <div class="col-inner">
                            <header>
                                <h3>Start New Palette</h3>
                            </header>
                            <a class="btn start" href="/creator">Start</a>
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
        protectedData: state.protectedData.data,
        paletteData: state.protectedData.paletteData
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
    

