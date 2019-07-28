import React from 'react';
import {inject, observer} from 'mobx-react';
import Route from '../router/'
import '../sass/style.scss';
@inject('home')
@observer
class Home extends React.Component{
	render(){
		return(
		   <><Route/></>
		)
	}
}

export default Home;