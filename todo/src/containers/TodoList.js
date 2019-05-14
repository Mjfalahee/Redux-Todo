import React from 'react';
import { connect } from 'react-redux';

import { addItem, toggleItem } from '../actions/index';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newitem: ''
        };
    }

    handleChanges = e => {
        this.setState({newitem: e.target.value});
    }

    addItem = e => {
        e.preventDefault();
        const newnew= {
            value: this.state.newitem,
            id: Date.now()
        }
        console.log(newnew);
        this.props.addItem(newnew);
        this.setState({newitem: ''});
    }

    toggleDone = id => {
        this.props.toggleItem(id);
    }

    render() {
        return (
            <React.Fragment> 
                <div className ="todolist">
                {this.props.items &&
                this.props.items.map(item => (
                    <h4 onClick={() => this.toggleDone(item.id)} key={item.id}>
                    {item.value}
                    {item.completed && <i className="fas fa-check" />}
                    </h4>
                ))}
                </div>

                <input
                    type="text"
                    value={this.state.newitem}
                    onChange={this.handleChanges}
                    placeholder="Add a new item"
                />
                <button onClick={this.addItem}>Add Item</button>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        items: state.items
    };
}

export default connect(mapStateToProps, {addItem, toggleItem})(TodoList);