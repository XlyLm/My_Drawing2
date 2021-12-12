import React from "react";

import './index.css';

export default class Tools extends React.Component{
    isClear=(e)=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm("是否清除缓存？")){
            this.props.Clear(true);
        }
    };
    isSave=(e)=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm("是否保存数据？")){
            this.props.Save(true);
        }
    };
    getTxt=(e)=>{
        this.props.LoadTxt(true);
    };
    toPre=(e)=>{
        this.props.Previous(true);
        this.props.Back(false);
    };
    toBack=(e)=>{
        this.props.Back(true);
        this.props.Previous(false);
    };
    render() {
        return (
            <form className={"tools"}>
                {/*图形类型*/}
                <select name="dKinds" id="1" onChange={this.props.submit1}>
                    <option value="dKind">图形类型</option>
                    <option value="triangle">三角形</option>
                    <option value="rectangle">矩形</option>
                    <option value="ellipse">椭圆</option>
                    <option value="start">五角星</option>
                    <option value="octagon">八边形</option>
                </select>

                {/*图形颜色*/}
                <select name="dColors" id="2" onChange={this.props.submit2}>
                    <option value="dBlack">图形颜色</option>
                    <option value="dWhite">无填充</option>
                    <option value="dBlue">blue</option>
                    <option value="dRed">red</option>
                    <option value="dPink">pink</option>
                    <option value="dYellow">yellow</option>
                    <option value="dGreen">green</option>
                </select>

                {/*图形边框*/}
                <select name="borders" id="3" onChange={this.props.submit3}>
                    <option value="2">边框大小</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>

                {/*边框颜色*/}
                <select name="bColors" id="4" onChange={this.props.submit4}>
                    <option value="bBlack">边框颜色</option>
                    <option value="bBlue">blue</option>
                    <option value="bRed">red</option>
                    <option value="bPink">pink</option>
                    <option value="bYellow">yellow</option>
                    <option value="bGreen">green</option>
                </select>

                <input type="button" onClick={this.toPre}  value={"撤销"}/>
                <input type="button" onClick={this.toBack} value={"重做"}/>
                <input type="button" onClick={this.isClear} value={"清除"}/>
                <input type="button" onClick={this.isSave} value={"保存"}/>
                <input type="button" onClick={this.getTxt} value={"导入文件"}/>
            </form>
        );
    }
}