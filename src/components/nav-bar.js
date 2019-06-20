import React from 'react';
import './nav-bar.css'
import { connect } from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Redirect} from 'react-router-dom';



export class NavBar extends React.Component{
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render(){
        return(
            <div class="nav">
                <a class="nav-header" href="/">
                    <div class="nav-title" >
                        Palette Hero
                    </div>
                    <img class="header-icon" src='https://cdn.pixabay.com/photo/2016/12/01/20/43/pear-1876160_960_720.png' alt="pear icon" width="40 px"/>
                </a>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <input type="checkbox" id="nav-check"/>
                <div class="nav-links">
                    <a href="/creator" > Creator </a>
                    <a href="/dashboard" > Dashboard </a>
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