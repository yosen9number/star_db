import React from "react";

import ItemDetails, {Record} from "../item-details";
import {withSwapiService} from "../hoc-helpers";

const PersonDetails = ({itemId, swapiService}) => {
    const {getPerson, getPersonImage} = swapiService;
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
};

export default withSwapiService(PersonDetails);
