import React from 'react';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {refreshAuthToken} from './actions/auth';

import './float-grid.css'

import NavBar from './components/nav-bar'
import FooterBar from './components/footer-bar'
import Landing from './components/landing'
import Creator from './components/creator'
import Dashboard from './components/dashboard'
import SignUp from './components/signup'
import Login from './components/login'


export class PaletteHero extends React.Component {
  componentDidUpdate(prevProps) {
      if (!prevProps.loggedIn && this.props.loggedIn) {
          // When we are logged in, refresh the auth token periodically
          this.startPeriodicRefresh();
      } else if (prevProps.loggedIn && !this.props.loggedIn) {
          // Stop refreshing when we log out
          this.stopPeriodicRefresh();
      }
  }

  componentWillUnmount() {
      this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
      this.refreshInterval = setInterval(
          () => this.props.dispatch(refreshAuthToken()),
          60 * 60 * 1000 // One hour
      );
  }

  stopPeriodicRefresh() {
      if (!this.refreshInterval) {
          return;
      }

      clearInterval(this.refreshInterval);
  }

  render() {
    const Page404 = ({ location }) => (
      <div>
         <h2>Awww there are no Palettes found here for <code>{location.pathname}</code> <br/> Try something else maybe?</h2>
      </div>
   );

    return (
      <Router>
        <div className="Palette-Hero">
          <NavBar></NavBar>
            <br/>
            <main>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/creator" component={Creator} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
                <Route component={Page404} />
              </Switch>
            </main>
            <br/>
          <FooterBar></FooterBar>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(PaletteHero));
