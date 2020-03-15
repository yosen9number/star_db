import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helpers";

const widthChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }

};

const renderName = ({name}) => <span>{name}</span>;
// const renderModelAndName = ({name, model}) => <span>{name} ({model})</span>;

const mapPesonMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPeople };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPlanets };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllStarships };
};

const PersonList = withSwapiService(
    withData(
    widthChildFunction(ItemList, renderName)),
    mapPesonMethodsToProps);

const PlanetList = withSwapiService(
    withData(
    widthChildFunction(ItemList, renderName)),
    mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
    withData(
    widthChildFunction(ItemList, renderName)),
    mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};
