import { BrowserRouter as Router,Switch,Route,NavLink,Redirect } from "react-router-dom";
import React, { Component } from "react";
import router from './router.js'
class Index extends Component {
    render() {
        return (
            <Router>
<<<<<<< HEAD
                <Switch>
                    {
                        router&&router.map((item,index)=>{
                            return !item.redirect&&<Route path={item.path} render={
								props=>{
									return React.createElement(item.component)
								}
							} key={index}></Route>
                        })
=======
               <Switch>
                    {
                      router&&router.map((item,index)=>{
                            return !item.redirect&&<Route path={item.path} render={
												props=>{
													return React.createElement(item.component)
												}
							         }key={index}></Route>
                      })
>>>>>>> dev
                    }
					{
						router&&router.map((item,index)=>{
							return item.redirect&&<Redirect from={item.redirect} to={item.path} key={index}></Redirect>
						})
					}
<<<<<<< HEAD
                </Switch>
=======
				</Switch>
>>>>>>> dev
            </Router>
        )
    }
}
export default Index