import React from "react";

import './people-page.css';


const Row = ({left, right}) => {
    return (
        <div className="person-block row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
};

export default Row;
