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
        values:0
    }
  render() {
    // console.log()
 
    let data = this.props.history.location.pathname.substr(13)
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
                  <span>{this.state.values}/80</span> 
                  <button>留言</button>
                </div>
              </div>
      </div>
    )
  }
  inputChange(e){
	let values=e.target.value.length;
    // console.log(values)
    this.setState({
        values:values
    })

}
  componentDidMount() {
    this.props.home.gethomeData()

  }
}
export default (withRouter(addMessage))
