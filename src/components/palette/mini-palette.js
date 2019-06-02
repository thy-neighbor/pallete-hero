//highest level with 5 color bricks
import React from 'react'
import ColorBlock from './color-block';
import ExitIcon from './exit-icon'
//import { SketchPicker } from 'react-color'
import './palette.css'
import PaletteCreator from './palette-creator';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';
import {setFullPalette, setEditState} from '../../actions/actions';
import {updatePaletteData} from '../../actions/protected-data';





export class MiniPalette extends React.Component{

    constructor(props){
        super(props);

        this.state = {

            up:false,  //random toggle to cause update in parent element
            duplicate:false
            
        };

    }

    onClickOpenEdit(rgb){
      this.props.dispatch(setFullPalette(rgb));
      this.setState({open:true});
    }

    onCloseModal(){
      this.props.dispatch(setEditState(false));
      this.setState({open:false});
    }

    onClickUpdate(id,rgb){//maybe also throw a toast saying that it updated
      //dispatch a put request
      this.props.dispatch(updatePaletteData(id,rgb));
    }



    render(){
        console.log("RENDER in Mini-PALETTE",this.props.rgb);
        return(
            
            <div class="mini-palette-wrapper">
                <div class="center palette-creator">
                    {this.props.id!==null && <ExitIcon paletteId={this.props.id}></ExitIcon>}
                    <div>
                      <div onClick={()=>this.onClickOpenEdit(this.props.rgb)}>
                          <ColorBlock color={this.props.rgb[0]} size="40" ></ColorBlock>
                          <ColorBlock color={this.props.rgb[1]} size="40" ></ColorBlock>
                          <ColorBlock color={this.props.rgb[2]} size="40" ></ColorBlock>
                          <ColorBlock color={this.props.rgb[3]} size="40" ></ColorBlock>
                          <ColorBlock color={this.props.rgb[4]} size="40" ></ColorBlock>
                      </div>
                      <Popup open={this.state.open} position="right center" modal onClose={()=>this.onCloseModal()} >{close => (
                          <div className="modal">
                            <a className="close" onClick={close}>
                              &times;
                            </a>
                            <div className="header"> "<em>{this.props.title}</em>" </div>
                            <div className="content">
                              {' '}
                              <PaletteCreator></PaletteCreator>
                            </div>
                            <div className="actions">
                              <button onClick={()=>{this.onClickUpdate(this.state.id,this.props.paletteCreatorRgb); close()}}>Update</button>
                              <button className="button" onClick={() => {close()}}>Close</button>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </div>                   
                </div>
                <p>"<em>{this.props.title}</em>"</p> 
            </div>
               
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser !== null,
        paletteCreatorRgb:state.paletteCreator.palette,
        open:false        
    };

};

export default connect(mapStateToProps)(MiniPalette);
