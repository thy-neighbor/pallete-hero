import React from 'react'
import {deletePaletteData} from '../../actions/protected-data'
import {connect} from 'react-redux';
//import "../../../public/icons/icons8-cancel-white.png"


export class ExitIcon extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            //paletteId:props.paletteId,
            hover:false
        };

    }


    onClickDelete(id){
        console.log("ON CLICK DELETE ID: ", id);
        this.props.dispatch(deletePaletteData(id));
        window.location = '/dashboard';
    }

    toggleHover(){

        this.setState(prevState => ({
            hover: !prevState.hover  

        }));
    }

    render(){

        var linkStyle;
        if (this.state.hover) {
            linkStyle = {color: 'red', cursor:"pointer", fontSize:'22px'}
        } else {
            linkStyle = {color: 'gray',cursor:"default", fontSize:'14px' }
        }
        return(
            <div onClick={()=> this.onClickDelete(this.props.paletteId)}  onMouseEnter={()=>this.toggleHover()} onMouseLeave={()=>this.toggleHover()}>
                <p style={linkStyle}>x</p>
            </div>
            
        );
    }

}

export default connect()(ExitIcon);