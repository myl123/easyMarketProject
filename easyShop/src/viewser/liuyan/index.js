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
class liuyana extends Component {
render() {
console.log(this.props.home)
let data = this.props.history.location.pathname.substr(13)
return (
  <div className="asd">
     <h4>
        <span><BackIcon /></span>
        <b>更多评价</b>
      </h4>
      <div className="allliyan">
    {
this.props.home&&this.props.home.estimatedata.map(ite=>{
  return <div key={ite.id}>
    <p>匿名用户<span>{ite.add_time}</span></p>
    <b>{ite.content}</b>
  </div>
})
                  }
  </div>
  </div>
)
}
componentDidMount() {
const id = this.props.history.location.pathname.substr(9)
console.log(id)
this.props.home.gethomeData()
this.props.home.messageData(id)

}
}
export default (withRouter(liuyana))
