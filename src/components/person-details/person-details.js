import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null
  };

  componentDidMount () {
    this.updatePerson();
  }

  componentDidUpdate (prevProps) {
    if (this.props.personId !== prevProps.id) {
      this.updatePerson();
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.personId !== prevProps.id) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
        .getPerson(personId)
        .then((person) => {
              this.setState({person});
            });
  }

  render() {
    const {person} = this.state;

    if (!person) {
      return <span>Select a person from a list</span>
    }

    const {
      id, name, birthYear, gender, skinColor,
      height, mass, hairColor, eyeColor
    } = this.state.person;

    return (
        <div className="person-details card">
          <div className="left-col">
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                 alt={`Character: ${name}`}
            />
            <ErrorButton className="error-button"/>
          </div>

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Gender</span>
                <span>{gender}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Birth Year</span>
                <span>{birthYear}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Height</span>
                <span>{height}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Mass</span>
                <span>{mass}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Hair Color</span>
                <span>{hairColor}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Eye Color</span>
                <span>{eyeColor}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Skin Color</span>
                <span>{skinColor}</span>
              </li>
            </ul>
          </div>
        </div>
    )
  }
};
