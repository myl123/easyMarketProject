import React, { Component } from 'react'
import "./index.scss"
import { inject, observer } from 'mobx-react';
import { withRouter } from "react-router-dom";
import { Icon, Drawer, Button } from "antd";

import Item from 'antd/lib/list/Item';
import BackIcon from "../../component/back"
import isCheck from '../../static/img/isCheck.png'
import noCheck from '../../static/img/noCheck.png'
import dataShuju from "../address/add"
import { Picker, List, WhiteSpace,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import 'antd-mobile/dist/antd-mobile.css';

import { district, provinceLite } from 'antd-mobile-demo-data';
import { tsMethodSignature } from '@babel/types';
@inject('home')
@observer
class address extends Component {
    
    state = { 
        // is_default: false, 
        name:"",
        mobile:"",
        address:"",
        province_id:"",
        city_id:"",
        district_id:"",
        is_default:false
    };
    
    submitForm() {
        console.log(this.state);
        // console.log(this.state.mobile)
       if(this.state.name===""){
            alert("您没输入姓名")
        }else if(this.state.mobile!==""&&!/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(this.state.mobile)){
            alert("您手机号格式不对")
        }else if(this.state.address===""){
            alert("您没输入地址")
        }else{
            this.props.home.addressData(this.state)
            this.onClose()
        }
        // if(this.state.mobile===""){
        //     alert("手机号不能为空")
        // }
       
        // const parmas = {
        //     name: this._name.current.value,
        //     mobile: this._phone.current.value,
        //     province_id,
        //     city_id,
        //     district_id,
        //     address: this._address.current.value,
        //     is_default: this.state.isDefault ? true : false
        //   }
      }
    render() {
        console.log(this.props.home)
        console.log(this.state)
        console.log(dataShuju)
        const { getFieldProps } = this.props.form;
        let {is_default}=this.state
        return (
            <div className="address">
                <div className="addressbrand">
                    <p>
                        <span><BackIcon /></span>
                        <b>地址管理</b>
                    </p>
                    
                    {/* 地址 */}
                    <div className="address">
                      <ul>
                          {
                              this.props.home&&this.props.home.getressdata.map(item=>{
                                    return <div key={item.id} className="adre">
<p>{item.name}</p>
<b>
<span>{item.mobile}</span><br/>
<span>{item.full_region}</span><br/>
<span>{item.address}</span>
</b>
<i onClick={(res)=>{
    let id=item.id
    console.log(id)
    this.props.home.deleteressData({id:id})
}}>删除</i>
                                    </div>
                              })
                          }
                      </ul> 
                      
                    </div>
                </div>
                <Button className="btn" onClick={this.showDrawer}>新建地址</Button>
                {/* ==================================================================== */}
                <Drawer
                    width={520}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            height: "100%",
                            borderTop: '1px solid #e8e8e8',
                            padding: '10px 16px',
                            textAlign: 'right',
                            left: 0,
                            background: '#fff',
                            borderRadius: '0 0 4px 4px',
                            fontSize: '.3rem'

                        }}
                    >
                        <p className="addresstop">
                            <span></span>
                            <b>地址管理</b>
                        </p>
                        <div className="guanli">
                            <input type="text" placeholder="请输入姓名" 
                            className="addName" 
                            onChange={(e)=>{
                                console.log(e.target.value)
                                this.setState({
                                    name:e.target.value
                                })
                          }}
                            /><br />
                            <input type="text" placeholder="请输入电话" 
                            className="addphone" 
                            onChange={(e)=>{
                                console.log(e.target.value)
                               
                                this.setState({
                                    mobile:e.target.value
                                })
                          }}
                            /><br />
                              <List className="addressList">
                                <Picker extra="请选择(可选)"
                                    data={dataShuju}
                                    title="Areas"
                                    {...getFieldProps('district', {
                                        initialValue: ['340000', '341500', '341502'],
                                    })}
                                    onOk={e => {
                                        console.log(e[0],"...........")
                                        this.setState({
                                            province_id:e[0],
                                            city_id:e[1],
                                            district_id:e[2],
                                          })
                                    }}
                                    onDismiss={e => console.log('dismiss', e)}
                                    className="choose"
                                >
                                    <List.Item arrow="horizontal">添加</List.Item>
                                </Picker>

                            </List>
                            <input type="text" placeholder="请输入详细地址" 
                            className="addAddress" 
                            onChange={(e)=>{
                               console.log(e.target.value)
                               this.setState({
                                   address:e.target.value
                               })
                         }}
                            /><br />
                            <div className="onePx_bottom">
                                <div  className="isDefaultAddress" onClick={()=>{
                                    this.setState({
                                        is_default:!is_default
                                    })
                                    
                                }}>
                                   
                                    设置默认地址
            <img src={is_default===false?noCheck:isCheck} alt="check" />
                                </div>
                            </div>

                        </div>
                        <div className="allbtn">
                            <Button
                                onClick={this.onClose}
                                className="sdf"
                            >
                                取消
            </Button>
                            <Button 
                            onClick={this.submitForm.bind(this)}
                            type="primary" className="sdf">
                                保存
            </Button>
                        </div>

                    </div>
                </Drawer>
            </div>
        )
    }
    componentDidMount() {
        this.props.home.getressData()

    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };

}
export default createForm()(withRouter(address))
