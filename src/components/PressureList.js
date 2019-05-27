import React, { Component } from 'react';
import { connect } from 'react-redux';

import PressureItem from './PressureItem';

class PressureList extends Component {
    constructor (props) {
        super(props);

        this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
    }

    handleSubmitButtonClick (event) {
        event.preventDefault();

        console.log('Form submited');
    }

    render () {
        const listItems = Object.values(this.props.pressure).map(item => {
            return <PressureItem
                key={item.id}
                id={item.id}
                fe={item.fe}
                part={item.part}
                pressure={item.pressure}
            />
        });

        return (
            <div className='pressure-container'>
                <div className='heading'>
                    Pressure list:
                </div>
                <div className='separator'></div>
                <div className='pressure-list' id="style-2">
                    { listItems }
                </div>
                <input type="submit" value="Submit" onClick={this.handleSubmitButtonClick}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pressure: state.pressure
});

export default connect(mapStateToProps)(PressureList);