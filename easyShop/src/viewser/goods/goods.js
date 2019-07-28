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
// console.log(this.props)
let data = this.props.history.location.pathname.substr(7)
// console.log(data)
return (
  <div className="goodsContent">
    {/* {
      this.props.home && this.props.home.categoryListdata.map(item => {
        return <div key={item.id}>
          {
            item.goodsList.map(ite => {
               console.log(ite)
              if (ite.id == data) {
                return <div key={ite.id} className="goodsTop">
                  <p>
                    <span><BackIcon /></span>
                    <b>{ite.name}</b>
                  </p>
                  <div className="goodsSection">
                  <img src={ite.list_pic_url} alt=""/>
                  </div>
                  <div className="goodsBottom">

                  </div>
                </div>
              }
              else{
                return 
              }
            })
          }
        </div>
      })
    } */}
  </div>
)
}
  componentDidMount() {
    const id = this.props.history.location.pathname.substr(7)
    console.log(this.props.home.getdetailData(id))
  }
}
export default (withRouter(Good))
