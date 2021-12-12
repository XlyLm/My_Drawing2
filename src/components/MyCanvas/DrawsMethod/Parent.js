import React from "react";

export default class Parent {
    static flag=0;
    constructor() {
        const e = arguments[0];
        const that = arguments[1];
        const attr = arguments[2];

        this.rate = e===0?attr.rate:0;
        this.firstX = e===0?attr.firstX:((that.state.firstLocation.x)<(e.pageX-e.target.offsetLeft)?
            (that.state.firstLocation.x):(e.pageX-e.target.offsetLeft));
        this.firstY = e===0?attr.firstY:((that.state.firstLocation.y)<(e.pageY-e.target.offsetTop)?
            (that.state.firstLocation.y):(e.pageY-e.target.offsetTop));
        this.lastX = e===0?attr.lastX:((that.state.firstLocation.x)>(e.pageX-e.target.offsetLeft)?
            (that.state.firstLocation.x):(e.pageX-e.target.offsetLeft));
        this.lastY = e===0?attr.lastY:((that.state.firstLocation.y)>(e.pageY-e.target.offsetTop)?
            (that.state.firstLocation.y):(e.pageY-e.target.offsetTop));
        this.width = e===0?attr.width:(this.lastX-this.firstX);
        this.height = e===0?attr.height:(this.lastY-this.firstY);

        this.border = e===0?attr.border:'none';
        this.condition = e===0?attr.condition:true;

        this.fillStyle = e===0?attr.fillStyle:(attr.dColors.slice(1).toLowerCase());
        this.lineWidth = e===0?attr.lineWidth:parseInt(attr.borders);
        this.strokeStyle = e===0?attr.strokeStyle:(attr.bColors.slice(1).toLowerCase());

        this.Component = arguments[3];
    }
    Draw(index){
        Parent.flag++;
        const Component=this.Component;
        return <Component dragEnd={this.dragEnd} x={this.firstX} y={this.firstY} rate={this.rate}
                          fillStyle={this.fillStyle} lineWidth={this.lineWidth} strokeStyle={this.strokeStyle}
                          width={this.width} height={this.height} key={index} z={Parent.flag} border={this.border}
                          getLocation={this.getLocation} choose={this.choose} condition={this.condition}
                          change1={this.change1} change2={this.change2} change3={this.change3} change4={this.change4}
                          change5={this.change5} change6={this.change6} change7={this.change7} change8={this.change8}
                          changeEnd={this.changeEnd} wheel={this.wheel}/>
    }
    dragEnd=(e,that)=>{
        e.preventDefault();
        if((that.state.location.ex+e.pageX-that.state.location.px)<=0){
            this.firstX=0;
            e.target.style.left='0px';
        }else if((that.state.location.ex+e.pageX-that.state.location.px+this.width)>=768){
            this.firstX=765-this.width;
            e.target.style.left=765-this.width+'px';
        }else{
            this.firstX=that.state.location.ex+e.pageX-that.state.location.px;
            e.target.style.left=that.state.location.ex+e.pageX-that.state.location.px+'px';
        }
        this.lastX=this.firstX+this.width;

        if((that.state.location.ey+e.pageY-that.state.location.py)<=0){
            this.firstY=0;
            e.target.style.top='0px';
        }else if((that.state.location.ey+e.pageY-that.state.location.py+this.height)>=456){
            this.firstY=453-this.height;
            e.target.style.top=453-this.height+'px';
        }else{
            this.firstY=that.state.location.ey+e.pageY-that.state.location.py;
            e.target.style.top=that.state.location.ey+e.pageY-that.state.location.py+'px';
        }
        this.lastY=this.firstY+this.height;
        e.target.style.zIndex=`${Parent.flag++}`;
    }
    getLocation(e,that){
        that.setState({location:{ex:parseInt(e.currentTarget.style.left),ey:parseInt(e.currentTarget.style.top),px:e.pageX,py:e.pageY}});
    }
    choose=(e,that)=>{
        if(that.state.condition){
            this.border='2px dotted gray';
            e.currentTarget.style.border='2px dotted gray';
        }else{
            this.border='none';
            e.currentTarget.style.border='none';
        }
        that.setState({condition:!that.state.condition});
        this.condition=!that.state.condition;
    }
    change1=(e,that)=>{
        e.preventDefault();
        e.target.onmousemove=(event)=>{
            if(event.pageX-376<=this.lastX-20){
                let c;
                if(event.pageX-376<=0){
                    this.firstY=0;
                    c=parseInt(event.target.parentNode.style.left)-this.firstX;
                    event.target.parentNode.style.left='0px';
                }else{
                    this.firstX=event.pageX-376;
                    c=parseInt(event.target.parentNode.style.left)-this.firstX;
                    event.target.parentNode.style.left=event.pageX-376+'px';
                }
                this.width=this.width+c;
                event.target.parentNode.style.width=this.width+'px';
                event.target.parentNode.firstChild.width=this.width;
            }

            if(event.pageY-164<=this.lastY-20){
                let c;
                if(event.pageY-164<=0){
                    this.firstY=0;
                    c=parseInt(event.target.parentNode.style.top)-this.firstY;
                    e.target.parentNode.style.top='0px';
                }else{
                    this.firstY=event.pageY-164;
                    c=parseInt(event.target.parentNode.style.top)-this.firstY;
                    event.target.parentNode.style.top=event.pageY-164+'px';
                }
                this.height=this.height+c;
                event.target.parentNode.style.height=this.height+'px';
                event.target.parentNode.firstChild.height=this.height;
            }
            that.draw(this.width,this.height);
        }
    }
    change2=(e,that)=>{
        e.preventDefault();
        e.target.onmousemove=(event)=>{

        }
    }
    change3=(e,that)=>{
        e.preventDefault();
        e.target.onmousemove=(event)=>{

        }
    }
    change4=(e,that)=>{
        e.preventDefault();
        e.target.onmousemove=(event)=>{

        }
    }
    change5=(e,that)=>{
        e.preventDefault();
        e.target.onmousemove=(event)=>{

        }
    }
    change6=(e,that)=>{
        e.preventDefault();
        e.target.onmousemove=(event)=>{

        }
    }
    change7=(e,that)=>{
        e.preventDefault();
        e.target.onmousemove=(event)=>{

        }
    }
    change8=(e,that)=>{
        e.preventDefault();
        e.target.onmousemove=(event)=>{

        }
    }
    changeEnd=(e,that)=>{
        e.target.onmousemove=null;
    }
    wheel=(e,that)=>{
        let y = e.deltaY;
        if (y > 0) {
            this.rate += 10;
        } else {
            this.rate -= 10;
        }
        that.setState({rate:this.rate});
    }
}
