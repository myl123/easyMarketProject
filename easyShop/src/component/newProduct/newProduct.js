import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect ,withRouter} from "react-router-dom";
import "./index.scss"
import { Icon } from 'antd';
import { inject, observer } from 'mobx-react';
@inject('home')
@observer
// import "../sass/footer/footer.scss"
class NewProduct extends Component {
    componentDidMount() {
        
        this.props.home.gethomeData()
        
    }
    render() {
        let {history}=this.props;
        // console.log(this.props.home)
        return (
            <div className="newProduct-top">
            {
                this.props.home && this.props.home.newGoodsListdata.map(item => (
                    // console.log(item)
                    <div 
                    onClick={()=>{
                        history.push({ pathname:'/goodst',state:{name : item.name },id:{id:item.id} })
                        console.log(item.id,item.name)
                   }}
                    key={item.id}>
                    <dl key={item.id}>
                        <dt><img src={item.list_pic_url} alt="" /></dt>
                        <dd>
                        <p>{item.name}</p>
                        <p className="productPrice">￥{item.retail_price}</p>
                        </dd>
                    </dl>
                    </div>
                ))
            }
        </div>
       
        )
    }
}
export default (withRouter(NewProduct))
