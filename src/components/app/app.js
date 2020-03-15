import React, {Component} from 'react';

import Header from '../header';

import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";

import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";
import Row from "../row";

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        selectedPerson: null
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        return (
            <ErrorBoundry>
                <div className="app">
                    <Header/>

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
            </ErrorBoundry>
        );
    }
};
