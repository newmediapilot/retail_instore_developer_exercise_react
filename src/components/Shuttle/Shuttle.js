import React from 'react';
import './Shuttle.scss';

class Shuttle extends React.Component {

    targetEl;

    componentDidMount() {
        window.addEventListener('resize', ()=> { this.updateStyleProps() });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', ()=> { this.updateStyleProps() });
    }

    state = {
        shuttleStyle: {
            'transition': 'all 0.6s',
            left: 0,
            width: 0,
        }
    };

    componentWillReceiveProps(props) {
        this.targetEl = props.target;

        this.updateStyleProps();
    }

    updateStyleProps() {
        if (!this.targetEl) return;

        let itemRect = this.targetEl.getBoundingClientRect();
        let spanRect = this.targetEl.querySelector('span').getBoundingClientRect();

        let newStyle = Object.assign({}, this.state.shuttleStyle, {
            left: itemRect.x + ((itemRect.width - spanRect.width) / 2),
            width: spanRect.width
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
