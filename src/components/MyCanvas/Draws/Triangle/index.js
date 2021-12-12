import React from "react";
import './index.css';

export default class Triangle extends React.Component{
    state={
        location:{
            x:0,
            y:0
        },
        condition:true,
        fillStyle:null,
        strokeStyle:null,
        lineWidth:null,
        rate:0
    }
    myRef;
    componentDidMount() {
        this.setState({condition:this.props.condition,fillStyle:this.props.fillStyle,strokeStyle:this.props.strokeStyle,lineWidth:this.props.lineWidth});
        this.draw(this.props.width,this.props.height);
    };
    draw=(width,height)=>{
        const cxt=this.myRef.getContext("2d");
        cxt.beginPath();
        cxt.fillStyle = this.state.fillStyle;
        cxt.strokeStyle = this.state.strokeStyle;
        cxt.lineWidth = this.state.lineWidth;

        cxt.moveTo(6,height-6);
        cxt.lineTo(width/2,6);
        cxt.lineTo(width-6,height-6);

        cxt.closePath();
        cxt.fill();
        cxt.stroke();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.draw(this.props.width,this.props.height);
    }
    render() {
        return (
            <div  style={{'position':'absolute','left':this.props.x+'px','top':this.props.y+'px','zIndex':this.props.z,
                'border':this.props.border,'width':this.props.width+'px','height':this.props.height+'px','transform': 'rotate('+this.state.rate+'deg)'}}
                  onDragEnd={(e)=>this.props.dragEnd(e,this)} draggable={!this.state.condition}
                  onMouseDown={(e)=>{this.props.getLocation(e,this)}}
                  onDoubleClick={(e)=>{this.props.choose(e,this)}} onWheel={(e)=>{return !this.state.condition?this.props.wheel(e,this):false}}>
                <canvas ref={c=>{this.myRef=c}}  width={this.props.width} height={this.props.height}></canvas>

                <div className={'r'} style={{'left':'-6px','top':'-6px','zIndex':this.props.z,'display':this.state.condition?'none':'block'}}
                     onMouseDown={(e)=>this.props.change1(e,this)} onMouseUp={(e)=>{this.props.changeEnd(e,this)}}
                     onMouseLeave={(e)=>{this.props.changeEnd(e,this)}}></div>
                <div className={'r'} style={{'left':this.props.width/2-5+'px','top':'-6px','zIndex':this.props.z,'display':this.state.condition?'none':'block'}}
                     onMouseDown={(e)=>this.props.change2(e,this)} onMouseUp={(e)=>{this.props.changeEnd(e,this)}}
                     onMouseLeave={(e)=>{this.props.changeEnd(e,this)}}></div>
                <div className={'r'} style={{'left':this.props.width-4+'px','top':'-6px','zIndex':this.props.z,'display':this.state.condition?'none':'block'}}
                     onMouseDown={(e)=>this.props.change3(e,this)} onMouseUp={(e)=>{this.props.changeEnd(e,this)}}
                     onMouseLeave={(e)=>{this.props.changeEnd(e,this)}}></div>
                <div className={'r'} style={{'left':this.props.width-3+'px','top':this.props.height/2-5+'px','zIndex':this.props.z,'display':this.state.condition?'none':'block'}}
                     onMouseDown={(e)=>this.props.change4(e,this)} onMouseUp={(e)=>{this.props.changeEnd(e,this)}}
                     onMouseLeave={(e)=>{this.props.changeEnd(e,this)}}></div>
                <div className={'r'} style={{'left':this.props.width-4+'px','top':this.props.height-4+'px','zIndex':this.props.z,'display':this.state.condition?'none':'block'}}
                     onMouseDown={(e)=>this.props.change5(e,this)} onMouseUp={(e)=>{this.props.changeEnd(e,this)}}
                     onMouseLeave={(e)=>{this.props.changeEnd(e,this)}}></div>
                <div className={'r'} style={{'left':this.props.width/2-5+'px','top':this.props.height-4+'px','zIndex':this.props.z,'display':this.state.condition?'none':'block'}}
                     onMouseDown={(e)=>this.props.change6(e,this)} onMouseUp={(e)=>{this.props.changeEnd(e,this)}}
                     onMouseLeave={(e)=>{this.props.changeEnd(e,this)}}></div>
                <div className={'r'} style={{'left':'-6px','top':this.props.height-4+'px','zIndex':this.props.z,'display':this.state.condition?'none':'block'}}
                     onMouseDown={(e)=>this.props.change7(e,this)} onMouseUp={(e)=>{this.props.changeEnd(e,this)}}
                     onMouseLeave={(e)=>{this.props.changeEnd(e,this)}}></div>
                <div className={'r'} style={{'left':'-6px','top':this.props.height/2-3+'px','zIndex':this.props.z,'display':this.state.condition?'none':'block'}}
                     onMouseDown={(e)=>this.props.change8(e,this)} onMouseUp={(e)=>{this.props.changeEnd(e,this)}}
                     onMouseLeave={(e)=>{this.props.changeEnd(e,this)}}></div>
            </div>
        )}
}