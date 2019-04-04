import React from 'react'
import './palette.css'
//<a href="https://icons8.com/icon/15454/lock-filled">Lock Filled icon by Icons8</a>

export default class ColorBlockTools extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {

            isLocked:false
        };

        this.clickLock = this.clickLock.bind(this);
    }


    

    clickLock(lockedBool){
        //when clicked converts state to correct case and passes it up to parent
        this.setState(prevState => ({
            isLocked: lockedBool  //toggle for hiding 

        })); 

        console.log("COLOR_BLOCK_TOOLS.JS lock Event function works", lockedBool);
        this.props.onLock(lockedBool);
    }

    lockEvent(){

    }

    render(){
        return(
            <div class="color-block-tools" >
                <h4 class="fit">{this.props.colorCode}</h4>
                {!this.state.isLocked && <img class="icon" id="lock" src={"https://img.icons8.com/ios/26/000000/lock-2.png"} alt="digital lock unlocked" onClick={(event)=>{this.clickLock(true)}} ></img>}
                {this.state.isLocked && <img class="icon" id="lock" src={"https://img.icons8.com/ios/26/000000/lock-2-filled.png"} alt="digital lock locked" onClick={(event)=>{this.clickLock(false)}}></img>}
            </div>
        );
    }

};


//https://img.icons8.com/ios/26/000000/lock-2.png
//https://img.icons8.com/ios/26/000000/lock-2-filled.png

//YOUR NEXT GOAL IS TO LET THE pARENT COMPONENTS KNOW THAT THIS COMPONENT IS EITHER LOCKED OR UNLOCKED, ADD A LOCKED STATE IN PALETTE BRICK AND SEND IT OVER TO THE PALETTE CREATOR