import React, { Component } from 'react';

import './item-list.css';
import Spinner from "../spiner";
import SwapiService from "../../services/swapi-service";

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

        return(
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}
            >
                {label}
            </li>
        );
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
};

const withData = (View, getData) => {
    return class extends Component {
        state = {
            itemList: null
        };

        componentDidMount () {
            getData()
                .then((data) => {
                    this.setState({
                        data
                    });
                });
        }

        render () {

            const { data } = this.state;

            if (!data) {
                return <Spinner/>;
            }

            return <View {...this.props} data={ data } />
        }
    };
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
