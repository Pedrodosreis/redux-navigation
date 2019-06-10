import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getText} from '../actions/text'

class MainPage extends Component {

    componentDidMount() {
        this.props.dispatch(getText())
        console.log(this.props)
    }

    onclick = () => {
        this.props.dispatch()
    }

    render() {

        return (

            <div>
                <h1>Main Page</h1>
                <h3>estado</h3>
                <h3>{this.props.state}</h3>
                <Link to={'/pageTwo'}>
                    <button>Asset Page</button>
                </Link>
            </div>
        );
    }
}

function mapStateToProps ({ text }) {
    return {
        text: text
    }
}

export default connect(mapStateToProps)(MainPage);