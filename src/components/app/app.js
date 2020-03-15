import React, {Component} from 'react';

import Header from '../header';

import './app.css';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundry from "../error-boundry";

import {SwapiServiceProvider} from "../swapi-service-context";

import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";
import Row from "../row";

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
            DummySwapiService : SwapiService;
            console.log('swith to'+ Service.name);

            return {
                swapiService: new Service()
            };
        });
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="app">
                        <Header onServiceChange={this.onServiceChange} />

                        <Row
                            left={<PersonList onItemSelected={() => {}} />}
                            right={<PersonDetails itemId={5} />}
                        />

                        <Row
                            left={<PlanetList onItemSelected={() => {}} />}
                            right={<PlanetDetails itemId={5} />}
                        />

                        <Row
                            left={<StarshipList onItemSelected={() => {}} />}
                            right={<StarshipDetails itemId={5} />}
                        />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
