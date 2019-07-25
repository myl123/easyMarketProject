import React from 'react';
import {inject, observer} from 'mobx-react';
import Route from '../router/'
import '../sass/style.scss';
@inject('home')
@observer
class Home extends React.Component{
	render(){
		// console.log(this.props)
		return(
		   <><Route/></>
		)
		{/*
		   console.log('props...', this.props, this.props.home.changeCount);
		   return <div>
		   	<button onClick={()=>this.props.home.changeCount('+')}>+</button>
		   	<span>{this.props.home.count}</span>
		   	<button onClick={()=>this.props.home.changeCount('-')}>-</button>
		   </div>
		*/}
	}
}

export default Home;