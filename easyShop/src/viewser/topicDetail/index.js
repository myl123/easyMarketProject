import React, { Component } from 'react'
import "./index.scss"
import { Button } from "antd"
import { inject, observer } from 'mobx-react';
import { withRouter } from "react-router-dom";
import { Icon } from "antd"
import Item from 'antd/lib/list/Item';
import BackIcon from "../../component/back"
import Liuyan from "../../component/liuyan/liuyan"
import { BrowserRouter as NavLink, Link } from "react-router-dom";
@inject('home')
@observer
class topicDetail extends Component {
render() {
  console.log()
  let data = this.props.history.location.pathname.substr(13)
return (
  <div className="topicDetail">
    {
      this.props.home && this.props.home.topicListdata.map(item => {
        console.log(item)
        if (item.id == data) {
          return <div key={item.id} className="topic">
            <p>
              <span><BackIcon /></span>
              <b>{item.title}</b>
            </p>
            <div className="topicgun">
              <div className="topicImg"
                dangerouslySetInnerHTML={{ __html: item.content }} />
                <div className="liuyan">
                  <p>精选留言<Icon type="edit" /></p>
                  <Liuyan />
                  
                <em></em>
                </div>
                <div className="tz">
              <div 
              onClick={()=>this.props.history.push(`/comment/${item.id}`)}
                  >查看更多评论
              </div>
            </div>
            </div>
            <p></p>
           
          </div>

        }
      })
    }
  </div>
)
}
componentDidMount() {
  const id = this.props.history.location.pathname.substr(13)
  this.props.home.gethomeData()
  this.props.home.messageData(id)

}
}
export default (withRouter(topicDetail))
