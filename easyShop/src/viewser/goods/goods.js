import React, { Component } from 'react'
import { Button } from "antd"
import { withRouter } from "react-router-dom";
import { inject, observer } from 'mobx-react';
import BackIcon from "../../component/back"
import "./index.scss"

@inject('home')
@observer
class Good extends Component {
render() {
console.log(this.props.home)
let data = this.props.history.location.pathname.substr(7)
return (
  <div className="goodsContent">
    {
      this.props.home && this.props.home.infodata.map(item => {
        return <div key={item.id} className="goodsTop">
          <p>
            <span><BackIcon /></span>
            <b>{item.name}</b>
          </p>
        </div>
      })
    }
  </div>
)
}
  componentDidMount() {
    const id = this.props.history.location.pathname.substr(7)
    // console.log(this.props.home.getdetailData(id))
    this.props.home.getdetailData(id)
  }
}
export default (withRouter(Good))
