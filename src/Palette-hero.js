import React from 'react';
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {refreshAuthToken} from './actions/auth';

import './float-grid.css'

import NavBar from './components/nav-bar'
import FooterBar from './components/footer-bar'
import Landing from './components/landing'
import Home from './components/home'
import MyPalettes from './components/my-palettes'
import SignUp from './components/signup'
import Login from './components/login'
//import ColorBlock from './components/palette/color-block'
//import PaletteBrick from './components/palette/palette-brick'
//import PaletteCreator from './components/palette/palette-creator'



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
    return (
      <Router>
        <div className="Palette-Hero">
          <NavBar></NavBar>
            <br/>
            <main>
              <Route exact path="/" component={Landing} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/my-palettes" component={MyPalettes} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
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

//export default PaletteHero;

/* STEPS for this project

1. Finish wireframe diagrams ##

2. Code the general corresponding components (Monday) ##

3. Build out the palette creator component(till it works w/ test data) (Tuesday)
    color-block.js (stateless, props: rgb or hex value)
    color-block-tools.js (stateless, props: rgb or hex)
    palette-brick.js( Composed of color-block.js, color-block-tools.js ; Stateful)
    palette-creator.js(5 palette bricks)

Redux components Action/Reducers
Do 
Action, reducer and store drills for refresher!!
    
3-5. Add the api functionality for the palette creator (Wednesday)


4. Add those to the jsx(where placeholders are)

5. Initialize database and work with mock data (Thursday)

6. Login/Signup/Logout Features (Friday)
    Follow thinkful curriculum for jwt and login

7. Add the rest of the CRUD actions for the user's palettes

*/ 

/*ADDITIONAL FEATURES 

-Community Page, that just has the most recent saves,an option that makes saved palettes public or private

*/