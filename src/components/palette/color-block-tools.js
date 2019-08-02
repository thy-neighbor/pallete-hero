import React from 'react'
import './palette.css'
import { connect } from 'react-redux';
import {swapPaletteBrick} from '../../actions/actions'


export class ColorBlockTools extends React.Component{
    
    constructor(props){
        super(props);


        this.state = {

            isLocked:this.props.edit,
            id:props.id
            
        };

        this.clickLock = this.clickLock.bind(this);
    }

    clickLock(lockedBool){

        //when clicked converts state to correct case and passes it up to parent
        this.setState(prevState => ({
            isLocked: lockedBool  //toggle for hiding 

        })); 
        
        this.props.onLock(lockedBool);
    }

    swap(current,target){
        this.props.dispatch(swapPaletteBrick(current,target));

    }

    lockCheck(id){
        if(this.props.lockedArray[id]!=='N' && !this.state.isLocked){
            this.setState({
                isLocked:true
            });
        }

        if(this.props.lockedArray[id]==='N' && this.state.isLocked){
            this.setState({
                isLocked:false
            });
        }
    }


    render(){
        this.lockCheck(this.state.id)

        return(
            <div class="color-block-tools" >
                <h4 class="fit">{this.props.colorCode}</h4>
                {this.state.id!==0 && <img class="icon" id="prev" src={"https://img.icons8.com/ios/50/000000/circled-chevron-left.png"} alt="iphone prev icon" onClick={()=>{this.swap(this.state.id,this.state.id-1)}} ></img>}
                {!this.state.isLocked && <img  id="lock" src={"https://img.icons8.com/ios/26/000000/lock-2.png"} alt="digital lock unlocked" onClick={(event)=>{this.clickLock(true)}} ></img>}
                {this.state.isLocked  && <img  id="lock" src={"https://img.icons8.com/ios/26/000000/lock-2-filled.png"} alt="digital lock locked" onClick={(event)=>{this.clickLock(false)}}></img>}
                {this.state.id!==4 && <img class="icon" id="next" src={"https://img.icons8.com/ios/50/000000/circled-chevron-right.png"} alt="iphone next icon" onClick={()=>{this.swap(this.state.id,this.state.id+1)}} ></img>}
            </div>
        );
    }

};

const mapStateToProps = state => {
    return({
        rgb:state.paletteCreator.palette,
        edit:state.paletteCreator.edit,
        lockedArray:state.paletteCreator.myInput
  });}
  
export default connect(mapStateToProps)(ColorBlockTools);

