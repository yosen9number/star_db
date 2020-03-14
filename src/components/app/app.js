import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';

import './app.css';
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import {Record} from "../item-details/item-details";

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

        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage} = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}
            >
                <Record field="gender" label="Gender" />
                <Record field="birthYear" label="Birth Year" />
                <Record field="height" label="Height" />
                <Record field="eyeColor" label="Eye Color" />
                <Record field="hairColor" label="Hair Color" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            >
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="passengers" label="Passengers" />
                <Record field="starshipClass" label="Starship lass" />
                <Record field="cost" label="Cost" />
            </ItemDetails>
            );

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
            >
                {(i) => (
                    `${i.name}  ${i.birthYear})`
                )}
            </ItemList>
        );

        return (
            <ErrorBoundry>
                <div className="app">
                    <Header/>
                    <Row left={personDetails} right={starshipDetails} />
                    <Row left={itemList} right={itemList} />
                </div>
            </ErrorBoundry>
        );
    }
};
