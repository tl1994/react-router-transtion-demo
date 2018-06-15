import React, { Component } from 'react';
import { connect } from 'react-redux'

class HomePage extends Component {
  componentWillMount() {
    // console.log(this.props)
    // this.props.dispatch(getAppConfig(this.props.history))
    // this.getCodeFun()
  }

  componentDidMount() {
    
  }

  /* 登录 */
  login = () => {
    this.props.history.push({pathname: '/', state: 'view-transition-rfr'})
  }

  render() {
    return (
      <div className="home-content">
        <a style={{color: 'yellow', fontSize: '30px'}} onClick={this.login} >login</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a style={{color: 'red', fontSize: '30px'}} onClick={() => {this.props.history.push({pathname: '/user', state: 'view-transition-sfr'})}} >user</a>
      </div>
    );
  }
}
const ConnectedHome = connect()(HomePage)
export default ConnectedHome