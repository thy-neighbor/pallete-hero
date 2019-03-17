import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
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


class PaletteHero extends React.Component {
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

export default PaletteHero;

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

7. Add the rest of the CRUD actions for the user's palettes

*/ 

/*ADDITIONAL FEATURES 

-Community Page, that just has the most recent saves,an option that makes saved palettes public or private

*/