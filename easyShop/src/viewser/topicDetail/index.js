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
class topicDetail extends Component {
  render() {
    // console.log()
    let data = this.props.history.location.pathname.substr(13)
    return (
      <div className="topicDetail">
        {
           this.props.home && this.props.home.topicListdata.map(item => {
            console.log(item.content)
            if (item.id == data) {
              return <div key={item.id} className="topic">
                 <p>
                  <span><BackIcon/></span>
                  <b>{item.title}</b>
                </p>
                <div className="topicImg">
              {item.content}
                  {/* <img src={item.content} alt=""/> */}
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
export default (withRouter(topicDetail))
