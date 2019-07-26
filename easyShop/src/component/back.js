import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { withRouter } from "react-router-dom";
import { Icon } from "antd"
@inject('home')
@observer
class BanckIcon extends Component {
  render() {
    return (
      <b>
        <Icon type="left" onClick={item=>{
            this.props.history.go("-1")
        }}/>
      </b>
    )
  }
}
export default (withRouter(BanckIcon))
