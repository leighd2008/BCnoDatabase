import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';
import homeImage from './images/BCLogo-clr.png';
import Home from './Home/Home'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TeamPage from './TeamPage/TeamPage';
import TournamentPage from './TournamentPage/TournamentPage';
import Training from './Training/Training';
import TryOuts from './Try-Outs/Try-Outs';
import ABPitching from './ABPitching/ABPitching';

library.add(faArrowRight, faArrowLeft);

const initialState = {
  homeImage: homeImage,
  backgroundImage: homeImage,
  teamName: "",
  route: "home",
  index: 0,
}

class App extends Component {
  constructor(props) {
    super(props)
      this.state = initialState
    }

    
    onRouteChange = (route, team, eventUrls) => {
      if (route === 'home') {
        this.setState(initialState)
      }
      this.setState({
        route: route,
        homeImage: homeImage,
        teamName: team,
        eventUrls: eventUrls,
      });
    }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation onRouteChange={this.onRouteChange} />
          <Route exact path="/BCnoDatabase" component={() => <Home homeImage={this.state.homeImage} />} />
          <Switch>
            <Route exact path="/BuckeyeCharge" component={() => <Home homeImage={this.state.homeImage} />} />
            <Route exact path="/BuckeyeCharge/tournaments" component={() => <TournamentPage />} />
            <Route exact path="/BuckeyeCharge/training" component={() => <Training />} />
            <Route exact path="/BuckeyeCharge/tryouts" component={() => <TryOuts homeImage={this.state.homeImage}/>} />
            <Route exact path="/BuckeyeCharge/Meikle12U" component={() => <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName}  eventUrls={this.state.eventUrls} />} />
            <Route exact path="/BuckeyeCharge/Cholley16U" component={() => <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName}  eventUrls={this.state.eventUrls} />} />
            <Route exact path="/BuckeyeCharge/Cavanagh15U" component={() => <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName}  eventUrls={this.state.eventUrls} />} />
            <Route exact path="/BuckeyeCharge/Gardner13U" component={() => <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName}  eventUrls={this.state.eventUrls} />} />
            <Route exact path="/BuckeyeCharge/Yoder14U" component={() => <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName}  eventUrls={this.state.eventUrls} />} />
            <Route exact path="/BuckeyeCharge/Norman12U" component={() => <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName}  eventUrls={this.state.eventUrls} />} />
            <Route exact path="/BuckeyeCharge/Gressman11U" component={() => <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName}  eventUrls={this.state.eventUrls} />} />
            <Route exact path="/BuckeyeCharge/Albertson10U" component={() => <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName}  eventUrls={this.state.eventUrls} />} />
            <Route exact path="/BuckeyeCharge/Homan8U" component={() => <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName}  eventUrls={this.state.eventUrls} />} />
            <Route exact path="/BuckeyeCharge/Kaisk16U" component={() => <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName}  eventUrls={this.state.eventUrls} />} />
            <Route exact path="/ABpitching" component={() => <ABPitching />} />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
