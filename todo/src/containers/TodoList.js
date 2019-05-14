import React from 'react';
import { connect } from 'react-redux';

// Add action creator imports

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({item: e.target.value});
    }

    addItem = e => {
        e.preventDefault();
        //action creator for adding an item here
        this.setState({item: ''});
    }

    toggleDone = id => {
        //this.props.toggleItem(id);
    }

    render() {
        return (
            <React.Fragment> 
                <div className ="todolist">
                {}


                </div>

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