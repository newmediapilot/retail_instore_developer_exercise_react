import React from 'react';
import './Navigation.scss';
import NavigationModel from "../../models/NavigationModel";

// todo: extract item component into own class
// todo: extract list component into own class

class Navigation extends React.Component {

    model = NavigationModel;

    /**
     * click handler
     */
    click(item) {
        this.model.forEach((modelItem) => {
            console.log('item === modelItem', item === modelItem);
            modelItem.active = item === modelItem;
        });
    }

    /**
     * list iterator
     */
    items() {
        return this.model.map((item, index) => {
            return (
                <li onClick={() => this.click(item)}
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
    list() {
        return (
            <nav className='nav-container'>
                <ul className="nav-list">
                    {this.items()}
                </ul>
            </nav>
        );
    }

    /**
     * output
     */
    render() {
        return this.list();
    }
}

export default Navigation;