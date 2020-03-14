import React, {Component} from "react";

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";

export default class PeoplePage extends Component{
    swapiService = new SwapiService();

    state={
        selectedPerson: 2,
        hasError: false
    };

    componentDidCatch (error, info) {
        debugger;
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render () {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

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

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}

