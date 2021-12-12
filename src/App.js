import './App.css';
import React from "react";
import Tools from "./components/Tools";
import MyCanvas from "./components/MyCanvas";

class App extends React.Component{
    state={
        DrawAttributes:{
            dKinds:'dKind',
            dColors:'dBlack',
            borders:2,
            bColors:'bBlack'
        },
        loadTxt:false,
        save:false,
        clear:false,
        previous:false,
        back:false
    };
    submit1=(e)=>{
        this.setState({DrawAttributes:{...this.state.DrawAttributes,dKinds:e.target.value}});
    };
    submit2=(e)=>{
        this.setState({DrawAttributes:{...this.state.DrawAttributes,dColors:e.target.value}});
    };
    submit3=(e)=>{
        this.setState({DrawAttributes:{...this.state.DrawAttributes,borders:e.target.value}});
    };
    submit4=(e)=>{
        this.setState({DrawAttributes:{...this.state.DrawAttributes,bColors:e.target.value}});
    };
    LoadTxt=(TF)=>{
        this.setState({loadTxt:TF});
    };
    Save=(TF)=>{
        this.setState({save:TF});
    };
    Clear=(TF)=>{
        this.setState({clear:TF});
    };
    Previous=(TF)=>{
        this.setState({previous:TF});
    };
    Back=(TF)=>{
        this.setState({back:TF});
    };
    render() {
        return (
            <div className="App">
                <h1>图形绘画工具</h1>
                <hr/>
                <Tools {...this.state.DrawAttributes}
                       Save={this.Save} Clear={this.Clear} Previous={this.Previous}
                       Back={this.Back} LoadTxt={this.LoadTxt} submit1={this.submit1}
                       submit2={this.submit2} submit3={this.submit3} submit4={this.submit4}/>

                <MyCanvas DrawAttributes={this.state.DrawAttributes} clear={this.state.clear}
                          previous={this.state.previous} backs={this.state.back} saves={this.state.save}
                          loadTxt={this.state.loadTxt} LoadTxt={this.LoadTxt} Save={this.Save} Clear={this.Clear}
                          Previous={this.Previous} Back={this.Back}/>
            </div>
        );
    };
}

export default App;
