import React, {Component} from 'react';
import Header from './Header';
import AddContainer from '../containers/AddContainer';
import ListContainer from '../containers/ListContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <AddContainer />
                <ListContainer />
            </div>
        );
    }
}