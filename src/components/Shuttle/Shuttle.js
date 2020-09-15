import React from 'react';
import './Shuttle.scss';

// todo: extract getLeftOffset into utility
// todo: extract updateStyleProps into utility
// todo: simplify render implementation (pure JS)

class Shuttle extends React.Component {

    targetEl;

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.updateStyleProps()
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => {
            this.updateStyleProps()
        });
    }

    state = {
        shuttleStyle: {
            left: 0,
            width: 0,
        }
    };

    componentWillReceiveProps(props) {
        this.targetEl = props.target;

        this.updateStyleProps();
    }

    getRelativeOffset(el) {
        let ul = this.targetEl.parentElement;
        let previousEl = ul.previousElementSibling;
        let offset = 0;
        while (previousEl) {
            offset += previousEl.getBoundingClientRect().width;
            previousEl = previousEl.previousElementSibling;
        }
        return offset;
    }

    updateStyleProps() {
        if (!this.targetEl) return;

        let offset = this.getRelativeOffset(this.targetEl);
        let itemWidth = this.targetEl.getBoundingClientRect().width;
        let textWidth = this.targetEl.querySelector('span').getBoundingClientRect().width;

        console.log('offset', offset);
        console.log('itemWidth', itemWidth);
        console.log('textWidth', textWidth);

        let newStyle = Object.assign({}, this.state.shuttleStyle, {
            left: offset + ((itemWidth - textWidth) / 2),
            width: textWidth
        });

        this.setState({shuttleStyle: newStyle});
    }

    render() {
        return (
            <div aria-hidden='true' className='shuttle-container'>
                <div className="shuttle--rail">
                    <div className="shuttle--line"></div>
                    <div className="shuttle--slider" style={this.state.shuttleStyle}></div>
                </div>
            </div>
        );
    }

}

export default Shuttle;
