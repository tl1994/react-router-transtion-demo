import React, { Component } from 'react';
import { connect } from 'react-redux'
class LoginPage extends Component {
  componentWillMount() {
    // console.log(this.props)
    // this.props.dispatch(getAppConfig(this.props.history))
    // this.getCodeFun()
  }

  componentDidMount() {
    
  }

  /* 登录 */
  login = () => {
    this.props.history.push({pathname: '/home', state: 'view-transition-sfr'})
  }

  render() {
    return (
      <div className="login-content">
        <a onClick={this.login} >home</a>
      </div>
    );
  }
}
const ConnectedLogin = connect()(LoginPage)

export default ConnectedLogin