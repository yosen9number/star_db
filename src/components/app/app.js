import React, {Component} from 'react';

import Header from '../header';

import './app.css';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundry from "../error-boundry";

import {SwapiServiceProvider} from "../swapi-service-context";

import RandomPlanet from "../random-planet";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsPage from "../pages/starships-page";

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
            DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            };
        });
    };

    render() {

        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="app">
                        <Header onServiceChange={this.onServiceChange} />

                        {planet}

                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
