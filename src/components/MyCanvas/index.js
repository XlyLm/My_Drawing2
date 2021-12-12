import React from "react";

import './index.css';
import Create from './DrawsMethod/Create';
import axios from "axios";
export default class Tools extends React.Component{
    state={
        DrawArray:[null],
        TF:false,
        firstLocation:{
            x:0,
            y:0
        },
        str:[],
    }
    componentDidMount() {
        this.setState({flag:this.state.DrawArray.length});
    }
    enterDraw=(e)=>{
        // 保存绘画
        if(this.props.saves){
            let params = new URLSearchParams();
            params.append("data",JSON.stringify(this.state.DrawArray));
            axios.post("/api/save",params).then(res=>{
                alert("保存成功!");
            }).catch(err=>{
                alert("保存失败!");
            })

            this.props.Save(false);
            setTimeout(()=>this.forceUpdate(),100);
        }
        // 加载绘画
        if(this.props.loadTxt){
            axios.get("/api/load").then(res=>{
                let data = res.data;
                this.state.DrawArray.pop();
                data.forEach(value=>{
                    if(value!==null)
                        this.state.DrawArray.push(Create(0,0,value));
                })
                this.state.DrawArray.push(null);
            }).catch(err=>{
                alert(err);
            })
            this.props.LoadTxt(false);
            setTimeout(()=>this.forceUpdate(),100);
        }
        // 清除当前绘画
        if(this.props.clear){
            this.setState({DrawArray:[],str:[]});
            this.props.Clear(false);
            setTimeout(()=>this.forceUpdate(),100);
        }
        // 返回上一个绘画
        if(this.props.previous){
            this.state.DrawArray.pop();
            const obj=this.state.DrawArray.pop();
            if(obj!==null&&obj!==undefined){
                this.state.str.push(obj);
            }
            this.state.DrawArray.push(null);
            this.props.Previous(false);
        }
        // 返回下一个绘画
        if(this.props.backs){
            const obj=this.state.str.pop();
            if(obj!==null&&obj!==undefined){
                this.state.DrawArray.pop();
                this.state.DrawArray.push(obj);
                this.state.DrawArray.push(null);
            }
            this.props.Back(false);
        }
    };
    startDraw=(e)=>{
        if(this.props.DrawAttributes.dKinds!=='dKind'&&e.target===e.currentTarget){
            this.setState({firstLocation:{x:e.pageX-e.target.offsetLeft,y:e.pageY-e.target.offsetTop},TF:true});
        }
    };
    moveDraw=(e)=>{
        if(this.state.TF) {
            this.state.DrawArray.pop();
            let component=Create(e,this,this.props.DrawAttributes);
            this.state.DrawArray.push(component);
        }
    };
    endDraw=(e)=>{
        if(this.state.TF){
            if(e.target!==e.currentTarget){
                this.state.DrawArray.pop();
            }
            if(this.state.DrawArray[this.state.DrawArray.length-1]!==null)
                this.state.DrawArray.push(null);
            this.setState({TF:false});
        }
    };
    render() {
        return (
            <div className={"canvas"} onMouseDown={this.startDraw} onMouseUp={this.endDraw}
                 onMouseMove={this.moveDraw} onMouseLeave={this.endDraw} onMouseEnter={this.enterDraw}>

                {
                    this.state.DrawArray.map((item,index)=>{
                        return item===null?null:item.Draw(index);
                    })
                }
            </div>
        );
    }
}