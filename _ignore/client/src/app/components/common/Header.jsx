import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to={this.props.authenticated ? '/getinsight/users' : '/getinsight'} className="logo">Get Insight</Link>
          <nav>
            {
              this.props.authenticated ?
                <ul>
                  <li>
                    <Link to="/getinsight/users">Users</Link>
                  </li>
                  <li>
                    <Link to="/getinsight/signout">Signout</Link>
                  </li>
                </ul>
                :
                <ul>
                  <li>
                    <Link to="/getinsight/signin">Sign in</Link>
                  </li>
                  <li>
                    <Link to="/getinsight/signup">Sign up</Link>
                  </li>
                </ul>
            }
          </nav>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);