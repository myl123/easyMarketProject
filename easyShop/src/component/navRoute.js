import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect } from "react-router-dom";
import "../sass/navRoute.scss"
import { Icon } from 'antd';
import { inject, observer } from 'mobx-react';
@inject('home')
@observer
// import "../sass/footer/footer.scss"
class Footer extends Component {
    componentDidMount() {
        
        this.props.home.gethomeData()
        
    }
    render() {
        console.log(this.props.home)
        return (
                <ul className="navTo">
                    {
                        console.log(this.props)
                    }
                    {
                         this.props.home && this.props.home.channeldata.map(item => (
                            // console.log(item)
                            // icon_url    id    name   sort_order   url路径
                            <li>
                                <NavLink to={item.url} key={item.id}>
                                    <dl>
                                        <dt><img src={item.icon_url} alt=""  className="iconStyle"/></dt>
                                        <dd>{item.name}</dd>
                                    </dl>
                                    {/* <span><br/></span>
                                    <span className="foot"></span> */}
                                </NavLink>
                            </li>
                        
                        ))
                    }
                   
                    {/* {
                        router.map((item,index)=>{
                            return item.name&&<li key={index}>
                            <NavLink to={item.path} key={index}>
                                <span><Icon type={item.icon} className="iconStyle"/></span>
                                <span className="foot">{item.name}</span>
                            </NavLink>
                            </li>
                        })
                    } */}
                </ul>
        )
    }
}
export default Footer
