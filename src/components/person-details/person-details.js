import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spiner";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  };

  componentDidMount () {
    this.updatePerson();
  }
  componentDidUpdate (prevProps) {
    if (this.props.personId !== prevProps.id) {
      this.updatePerson();
    }
  }

  onPersonLoaded = (person) => {
    this.setState({
      person,
      loading: false
    });
  };

  updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
        .getPerson(personId)
        .then(this.onPersonLoaded)
        .catch(this.componentDidUpdate);
  }

  render() {
    const { person, loading }=this.state;

    if (!person) {
      return <span>Select a person from a list</span>
    }

    const spinner = loading ? <Spinner className="spinner"/> : null;
    const content = !loading ? <PersonView person={person}/> : null;

    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    )
  }
}

const PersonView = ({person}) => {

  const { id, name, birthYear, gender, skinColor,
    height, mass, hairColor, eyeColor } = person;

  return (
      <React.Fragment>
        <img className="person-image"
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
             alt={`Character: ${name}`}
        />

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
      </React.Fragment>
  );
};
