import React from "react";

import ItemDetails, {Record} from "../item-details";
import {withSwapiService} from "../hoc-helpers";

const StarshipDetails = ({itemId, swapiService}) => {
    const {getStarship, getStarshipImage} = swapiService;
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
};

export default withSwapiService(StarshipDetails);
