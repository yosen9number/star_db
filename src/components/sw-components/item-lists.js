import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helpers";

const widthChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }

};

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

const PersonList = withSwapiService(mapPesonMethodsToProps)(
    withData(
        widthChildFunction(renderName)(
            ItemList)));

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
    withData(
        widthChildFunction(renderName)(
            ItemList)));

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
    withData(
        widthChildFunction(renderName)(
            ItemList)));

export {
    PersonList,
    PlanetList,
    StarshipList
};
