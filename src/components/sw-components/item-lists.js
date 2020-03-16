import React from "react";
import ItemList from "../item-list";
import {
    withData,
    withSwapiService,
    widthChildFunction,
    compose } from "../hoc-helpers";


const renderName = ({name}) => <span>{name}</span>;

const mapPesonMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPeople };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPlanets };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllStarships };
};

const PersonList = compose(
                    withSwapiService(mapPesonMethodsToProps),
                    withData,
                    widthChildFunction(renderName)
                )(ItemList);

const PlanetList = compose(
                    withSwapiService(mapPlanetMethodsToProps),
                    withData,
                    widthChildFunction(renderName)
                )(ItemList);

const StarshipList = compose(
                    withSwapiService(mapStarshipMethodsToProps),
                    withData,
                    widthChildFunction(renderName)
                )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};
