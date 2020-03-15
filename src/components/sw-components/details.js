import React from "react";

import ItemDetails, {Record} from "../item-details";

import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";

const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
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
                }
            }
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}
                        >
                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="Rotation Period" />
                            <Record field="diameter" label="Diameter" />
                            <Record field="climate" label="Climate" />
                            <Record field="gravity" label="Gravity" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getStarship}
                            getImageUrl={getStarshipImage}
                        >
                            <Record field="model" label="Model" />
                            <Record field="length" label="Length" />
                            <Record field="passengers" label="Passengers" />
                            <Record field="starshipClass" label="Starship Class" />
                            <Record field="cost" label="Cost" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};
