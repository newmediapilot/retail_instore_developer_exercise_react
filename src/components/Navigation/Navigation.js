import React from 'react';
import './Navigation.scss';
import NavigationModel from "../../models/NavigationModel";
import Shuttle from "../Shuttle/Shuttle";

// todo: extract item component into own class
// todo: extract list component into own class
// todo: create time fetch service
// todo: crete time display component

class Navigation extends React.Component {

    state = {
        items: [...NavigationModel.items]
    };

    /**
     * passed into child on click
     */
    clickTarget;

    /**
     * click handler
     */
    click(item, evt) {
        let mapped = this.state.items.map((model) => {
            model.active = (item.route === model.route);
            return model;
        });
        this.setState({items: mapped});
        this.clickTarget = evt.target;
    }

    /**
     * list iterator
     */
    items() {
        return this.state.items.map((item, index) => {
            return (
                <li onClick={(e) => this.click(item, e)}
                    className={`nav-item ${item.active ? 'nav-item--active' : ''}`}
                    key={index}>
                    <a className="nav-item--link" href={item.route}>
                        <span className="nav-item--text">{item.label}</span>
                    </a>
                </li>
            );
        });
    }

    /**
     * container
     */
    render() {
        return (
            <nav className='nav-container'>
                <ul className="nav-list">
                    {this.items()}
                </ul>
                <Shuttle target={this.clickTarget}/>
            </nav>
        );
    }
}

export default Navigation;