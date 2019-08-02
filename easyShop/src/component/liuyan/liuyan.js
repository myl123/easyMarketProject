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
class liuyan extends Component {
render() {
console.log()
let data = this.props.history.location.pathname.substr(13)
return (
  <div className="asd">
     {/* <div className="LiuyanAll">
        <span><BackIcon /></span>
        <b>更多评价</b>
      </div> */}
      <div className="allliyan">
    {
this.props.home&&this.props.home.estimatedata.map(ite=>{
  return <div key={ite.id} className="anonymity">
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
const id = this.props.history.location.pathname.substr(13)
this.props.home.gethomeData()
this.props.home.messageData(id)

}
}
export default (withRouter(liuyan))
