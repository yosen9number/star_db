import React, {Component} from 'react';

import Header from '../header';

import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";

import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";

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

                    <PersonList onItemSelected={() => {}}>
                        { ({name}) => <span>{name}</span> }
                    </PersonList>

                    <PlanetList onItemSelected={() => {}}>
                        { ({name}) => <span>{name}</span> }
                    </PlanetList>

                    <StarshipList onItemSelected={() => {}}>
                        { ({name}) => <span>{name}</span> }
                    </StarshipList>

                    <PersonDetails itemId={5} />
                    <PlanetDetails itemId={5} />
                    <StarshipDetails itemId={5} />

                </div>
            </ErrorBoundry>
        );
    }
};
