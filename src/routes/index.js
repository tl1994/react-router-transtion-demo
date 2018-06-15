import React, { Component } from 'react';
import { Router, Route, Switch} from "react-router-dom";
import routerConfig from './routes'

import history from '../utils/history'
import { TransitionGroup, CSSTransition } from "react-transition-group";

/**
* 根据路由配置生成相应路由
* @param {array} routeConfig 路由配置
* @param {string} parentPath 父级路由
*/
function routes(routeConfig, parentPath = '') {
  if (!routeConfig || routeConfig.length === 0) {
    return null
  }
  return (
    routeConfig.map(route => (
      <Route 
        path={parentPath + route.path} 
        key={parentPath + route.path} 
        exact={route.exact}
        render={(props) => (
          <route.component {...props}>
            {routes(route.routes, parentPath + route.path)}
          </route.component>
        )} 
      />
    ))
  )
}

export default class Routes extends Component{
  componentWillMount() {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUnmount() {
    
  }

  render(){
    return (
      <Router history={history}>
        <Route
          render={(props) => {
            let direction = props.location.state ? props.location.state : 'view-transition-sfr';
            return (
              <TransitionGroup
                className= 'router-view'
                childFactory={
                  (child) =>{
                    return React.cloneElement(child, {
                      classNames: direction
                    })
                  }
                }
              >
                <CSSTransition 
                  key={props.location.pathname}
                  timeout={{enter: 300, exit: 300}}
                >
                <div className="view">
                  <Switch location={props.location}>
                    {routes(routerConfig)}
                  </Switch>
                </div>  
                </CSSTransition>
              </TransitionGroup>
            )
          }}
        />
      </Router>
    )
  }
}