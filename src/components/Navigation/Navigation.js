import React from 'react';
import './Navigation.scss';
import NavigationModel from "../../models/NavigationModel";
import Shuttle from "../Shuttle/Shuttle";

// todo: extract item component into own class
// todo: extract list component into own class

class Navigation extends React.Component {

    state = {
        items: [...NavigationModel.items]
    };

    /**
     * click handler
     */
    click(item, evt) {
        let mapped = this.state.items.map((model) => {
            model.active = (item.route === model.route);
            return model;
        });
        this.setState({items: mapped});
    }

    /**
     * list iterator
     */
    items() {
        return this.state.items.map((item, index) => {
            return (
                <li onClick={(evt) => this.click(item, evt)}
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
                <Shuttle/>
            </nav>
        );
    }
}

export default Navigation;