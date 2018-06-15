import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserPage extends Component {
  componentWillMount() {
    // console.log(this.props)
    // this.props.dispatch(getAppConfig(this.props.history))
    // this.getCodeFun()
  }

  componentDidMount() {
    
  }

  /* 登录 */
  login = () => {
    this.props.history.push({pathname: '/home', state: 'view-transition-rfr'})
  }

  render() {
    return (
      <div className="user-content">
        <a onClick={this.login} >home</a>
      </div>
    );
  }
}
const ConnectedUser = connect()(UserPage)

export default ConnectedUser