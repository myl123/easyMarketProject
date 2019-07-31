import React, { Component } from 'react'
import "./index.scss"
import { Button } from "antd"
import { inject, observer } from 'mobx-react';
import { withRouter } from "react-router-dom";
import { Icon } from "antd"
import Item from 'antd/lib/list/Item';
import BackIcon from "../../component/back"
@inject('home')
@observer
class addMessage extends Component {
    state={
        content:"",
        typeId:"",
        valueId:0
    }
  
  render() {
    console.log(this.props.home)
    console.log(this.state)
    return (
      <div className="message">
       <div className="messagebrand">
                <p>
                  <span><BackIcon/></span>
                  <b>填写留言</b>
                </p>
                {/* 留言板 */}
                <div className="messageBox">
                  <textarea 
                  minLength="1" 
                  maxLength="80" 
                  cols="30" 
                  rows="10"
                  onChange={(e)=>this.inputChange(e)}
                  >
                  </textarea>
                  <span>{this.state.content.length}/80</span> 
                  <button onClick={
                    ()=>this.clickTj()
                  }>留言</button>
                </div>
              </div>
      </div>
    )
  }
  clickTj=()=>{
    let {
      content,typeId,valueId
    }=this.state;
    
    console.log(content,typeId,valueId)
    this.props.home.addMessageData(content,typeId,valueId)
    alert("评论成功")
    this.props.history.go("-1")
  }
//   管控留言板的次数
  inputChange(e){
  let content=e.target.value;
  let data = this.props.history.location.pathname.substr(19);
    console.log(content)
    this.setState({
      content:content
    })
   
    this.setState({
      typeId:data
    })
   
}
}
export default (withRouter(addMessage))
