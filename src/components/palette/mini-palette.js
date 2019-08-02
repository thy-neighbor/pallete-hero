import React from 'react'
import ColorBlock from './color-block';
import ExitIcon from './exit-icon'
import './palette.css'
import PaletteCreator from './palette-creator';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';
import {setFullPalette, setEditState} from '../../actions/actions';
import {updatePaletteData} from '../../actions/protected-data';
import '../popup-modal.css'
import DuplicateForm from './duplicate-form'



export class MiniPalette extends React.Component{

    constructor(props){
        super(props);

        this.state = {

            edit:false,  //random toggle to cause update in parent element
            duplicate:false,
            empty:true
            
        };

    }

    onClickOpenEdit(rgb){
      this.props.dispatch(setFullPalette(rgb));
      return true;
    }

    onCloseModal(){
      this.props.dispatch(setEditState(false));
    }

    onOpenDuplicate(rgb){
      this.props.dispatch(setFullPalette(rgb));
      return true;
    }

    onClickUpdate(id,rgb){//maybe also throw a toast saying that it updated
      this.props.dispatch(updatePaletteData(id));
      window.location = '/dashboard';
    }


    isEmpty(text){
      if(text===' ' ||text===''|| text===undefined || text===null){
        return false;
      }else{
        return true;
      } 
    }


    render(){
        let bool;

        //duplicate - popup declaration
        const duplicateButton=
            <Popup trigger={<img class="icon-stack" src="https://img.icons8.com/dotty/80/000000/copy.png" alt="copy icon" width="30px" title="Copy Palette"></img>} modal>
              {close => (this.onOpenDuplicate(this.props.rgb) &&  
              <div className="modal">
                <a className="close" onClick={close}>
                  &times;
                </a>
                <div className="header"> 
                
                </div>
                <div className="content">
                  {' '}
                  <PaletteCreator></PaletteCreator>
                </div>
                <div className="actions">
                  <DuplicateForm close={()=>close()}></DuplicateForm>
                </div>
              </div>
            )}
            </Popup>;
        
        //edit - popup declaration
        const editButton=
          <Popup trigger={<img class="icon-stack" src="https://img.icons8.com/wired/64/000000/edit-row.png" alt='edit palette' title="Edit Palette" width="30px"></img>} position="right center" modal onClose={()=>this.onCloseModal()} >{close => ( 
            this.onClickOpenEdit(this.props.rgb) &&
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
                <a class="btn save" onClick={()=>{this.onClickUpdate(this.state.id); close()}}>Update</a>
                <a class="btn save" onClick={() => {close()}}>Close</a>
              </div>
              
            </div>
          )}
        </Popup>;


        return(
            
            <div class="mini-palette-wrapper">
                <div class="center palette-creator">
                    {this.props.id!==null && <ExitIcon paletteId={this.props.id}></ExitIcon>}
                    <div>
                    <Popup trigger={
                      <div>
                        <ColorBlock color={this.props.rgb[0]} size="40" ></ColorBlock>
                        <ColorBlock color={this.props.rgb[1]} size="40" ></ColorBlock>
                        <ColorBlock color={this.props.rgb[2]} size="40" ></ColorBlock>
                        <ColorBlock color={this.props.rgb[3]} size="40" ></ColorBlock>
                        <ColorBlock color={this.props.rgb[4]} size="40" ></ColorBlock>
                      </div>

                    } position="right center">
                      <div className="small-actions">
                        {editButton}
                        {duplicateButton}
                      </div>
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
        open:false        
    };

};

export default connect(mapStateToProps)(MiniPalette);
