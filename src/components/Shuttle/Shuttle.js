import React from 'react';
import './Shuttle.scss';

class Shuttle extends React.Component {
    
    render() {
        return (
            <div aria-hidden='true'
                 className='shuttle-container'>
                <div className="shuttle--rail">
                    <div className="shuttle--slider">&nbsp;</div>
                </div>
            </div>
        )
    }

}

export default Shuttle;
