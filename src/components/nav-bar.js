import React from 'react';
import './nav-bar.css'
import { connect } from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';



export class NavBar extends React.Component{
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render(){
        return(
            <div class="nav">
                <div class="nav-header">
                    <div class="nav-title">
                        Palette Hero
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <input type="checkbox" id="nav-check"/>
                <div class="nav-links">
                    <a href="/home" > Home </a>
                    <a href="/my-palettes" > My Palettes </a>
                    {this.props.loggedIn && <a href="/" onClick={() => this.logOut()}> Log out </a>}
                    {!this.props.loggedIn && <a href="/login" > Login </a>}
                    
                </div>
            </div> 
        ); 
    }
    
} 

const mapStateToProps = state =>({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);
//<a href="/signup" > Signup </a>