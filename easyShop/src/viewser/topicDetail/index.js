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
  console.log(this.props.home)
  let data = this.props.history.location.pathname.substr(13)
return (
  <div className="topicDetail">
    {
      this.props.home && this.props.home.topicSpecialdata.map(item => {
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
                  <div className="liuyana">
                    <h4>精选留言</h4>
                    <Link 
                    to={`/topicCommentWrite/${item.id}`}
                    >
                    <Icon type="edit" />
                    </Link>
                   
                    </div>
                  <Liuyan />
                  
                <em></em>
                </div>
                <div className="tz">
              <div 
              onClick={()=>this.props.history.push(`/comment/${item.id}`)}
                  className="gd">查看更多评论
              </div>
              <div className="recommend">
                  <b>推荐专题</b>
                  <div className="specialTopas">
                        {
                            this.props.home && this.props.home.topicSpecialdata.map(item => (
                                //  console.log(item)
                                <div className="contents" key={item.id}>
 <NavLink to={`/topicDetail/${item.id}`} key={item.id}>
                                    <img src={item.item_pic_url} alt="" className="im"/>
                                    <div className="wz">
                                        <h6>{item.title}</h6>
                                        <b>{item.subtitle}</b>
                                    </div>
                                </NavLink>
                                </div>
                               

                            ))
                        }
                    </div>
              </div>
            </div>
            </div>
            
           
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
  this.props.home.topicSpecialData(id)
  this.props.home.messageData(id)
  

}
}
export default (withRouter(topicDetail))
