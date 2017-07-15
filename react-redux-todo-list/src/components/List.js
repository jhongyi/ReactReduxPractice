import React, { Component, PropTypes } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }

    render () {
        let lists = this.props.list;
        return (
            <ul key="todos">
                {this.props.list.map((item, index) => 
                    <li key={index}>
                        {item}
                    </li>
                )}
            </ul>
        )
    }
}