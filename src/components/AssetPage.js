import React, {Component} from 'react';
import { connect } from 'react-redux';

class MainPage extends Component {

    render() {

        return (

            <div>
                <h1>Asset Page</h1>
                <button>Change Text</button>
            </div>
        );
    }
}

export default connect()(MainPage);