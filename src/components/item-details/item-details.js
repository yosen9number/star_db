import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";


const Record = ({ item, field, label }) => {
  return(
      <li className="list-group-item">
        <span className="term">{label}:</span>
        <span>{item[field]}</span>
      </li>
  );
};

export { Record };

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null
  };

  componentDidMount () {
    this.updateItem();
  }

  componentDidUpdate (prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
        .then((item) => {
            this.setState({
              item,
              image: getImageUrl(item)
            });
            console.log(item, getImageUrl(item));
          });
  }

  render() {
    const {item, image} = this.state;

    if (!item) {
      return <span>Select a item from a list</span>
    }

    const { name } = item;

    return (
        <div className="item-details card">
          <div className="left-col">
            <img className="item-image"
                 src={image}
                 alt={`Character: ${name}`}
            />
            <ErrorButton className="error-button"/>
          </div>

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(this.props.children, (child, idx) => {
                        return React.cloneElement(child, { item });
                    })
                }
            </ul>
          </div>
        </div>
    )
  }
};
