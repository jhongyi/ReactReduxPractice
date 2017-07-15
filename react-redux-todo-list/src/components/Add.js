import React, {Component} from 'react';

export default class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "todo": ""
        }
    }

    handleClick = () => {
        this.props.actions.addList(this.state.todo);
    }

    handleChangeTodoText = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="input todo task" value={this.state.todo} onChange={(e) => this.handleChangeTodoText(e)} />
                <button onClick={(e) => this.handleClick()}>Add</button>
            </div>
        )
    }
}