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
class brandDetail extends Component {
  render() {
    // console.log()
    let data = this.props.history.location.pathname.substr(13)
    return (
      <div className="brandDetail">
        {
          this.props.home && this.props.home.brandListdata.map(item => {
            if (item.id == data) {
              return <div key={item.id} className="brand">
                <p>
                  <span><BackIcon/></span>
                  <b>{item.name}</b>
                </p>
                <div className="barndImg">
                  <img src={item.app_list_pic_url} alt=""/>
                  <span>
                    {item.simple_desc}
                  </span>
                </div>
              </div>
            }
          })
        }
      </div>
    )
  }
  componentDidMount() {
    this.props.home.gethomeData()

  }
}
export default (withRouter(brandDetail))
