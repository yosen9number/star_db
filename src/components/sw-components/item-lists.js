import React from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import { withData } from "../hoc-helpers";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

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
const renderModelAndName = ({name, model}) => <span>{name} ({model})</span>;

const PersonList = withData(
    widthChildFunction(ItemList, renderName),
    getAllPeople);

const PlanetList = withData(
    widthChildFunction(ItemList, renderName),
    getAllPlanets);

const StarshipList = withData(
    widthChildFunction(ItemList, renderModelAndName),
    getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};
