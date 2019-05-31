import React from 'react'
import MiniPalette from './mini-palette';
import './palette.css'


export default class PaletteList extends React.Component{

    constructor(props){
        super(props);

        this.state = {

            listIterator:0,
            paletteData:this.cleanPaletteList(props.paletteData),
            change:false
        };
    }

    clickEvent(newIter){
        this.setState({
            listIterator:newIter
        });
    }

    cleanPaletteList(list){//fills in blanks for 3x3 grid if any
        let l=list.length;
        const length= list.length;
        if(l<9){
            l=9-l;
        }else{
            while(l>=9){l=l-9;}
        }
        
        for(let i=0;i<l;i++){
            list[length+i]={rgb:[[0, 0, 0],[52, 52, 52],[122, 122, 122],[200, 200, 200],[255,255,255]], name:"Blank", _id:null};
        }
        return list;
    }

    onChangeList(){
        this.setState(prevState => ({
            change: !prevState.change  //toggle for changes

        }));

    }


    render(){
        let item=this.state.paletteData;
        console.log("Here is my CORRECTED LIST",item);
        let iter=this.state.listIterator;
        return(
            <section class="my-palette-col">
                <div class="row inner">
                    <div class="col-4">
                    <MiniPalette rgb={item[0+iter].rgb} title={item[0+iter].name} id={item[0+iter]._id}></MiniPalette>
                    </div>
                    <div class="col-4">
                    <MiniPalette rgb={item[1+iter].rgb} title={item[1+iter].name} id={item[1+iter]._id}></MiniPalette>
                    </div>
                    <div class="col-4">
                    <MiniPalette rgb={item[2+iter].rgb} title={item[2+iter].name} id={item[2+iter]._id}></MiniPalette>
                    </div>
                </div>
                <div class="row inner">
                    <div class="col-4">
                    <MiniPalette rgb={item[3+iter].rgb} title={item[3+iter].name} id={item[3+iter]._id}></MiniPalette>
                    </div>
                    <div class="col-4">
                    <MiniPalette rgb={item[4+iter].rgb} title={item[4+iter].name} id={item[4+iter]._id}></MiniPalette>
                    </div>
                    <div class="col-4">
                    <MiniPalette rgb={item[5+iter].rgb} title={item[5+iter].name} id={item[5+iter]._id}></MiniPalette>
                    </div>
                </div>
                <div class="row inner">
                    <div class="col-4">
                    <MiniPalette rgb={item[6+iter].rgb} title={item[6+iter].name} id={item[6+iter]._id}></MiniPalette>
                    </div>
                    <div class="col-4">
                    <MiniPalette rgb={item[7+iter].rgb} title={item[7+iter].name} id={item[7+iter]._id}></MiniPalette>
                    </div>
                    <div class="col-4">
                    <MiniPalette rgb={item[8+iter].rgb} title={item[8+iter].name} id={item[8+iter]._id}></MiniPalette>
                    </div>
                </div>
                <button onClick={()=> this.clickEvent(this.state.listIterator-3)}>Prev</button>
                <button onClick={()=> this.clickEvent(this.state.listIterator+3)}>Next</button>
            </section>   
        );
    }
}



