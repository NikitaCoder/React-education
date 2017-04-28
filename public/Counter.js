import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { CounterManipulationAdd } from './action';
import { CounterManipulationDel } from './action';
import {RaisedButton} from 'material-ui';
import styles from './styles';


class Counter extends React.Component {

    constructor(props){

        super(props);
        
    }

    addClick(){
        
        this.props.onAddClick();

    }
    deleteClick(){

        this.props.onDelClick();

    }

    consoleTest(){

        this.props.consoleHandler('123');

    }

    render(){

        var visible = this.props.counterVisible ? "show" : "hide";

        return(
            <div className={`main ${visible}`}>
                <h2 style={styles.h2}>Counter: {this.props.counter}</h2>
                <RaisedButton onClick={this.addClick.bind(this)} primary={true} label="Add 1" />
                <RaisedButton onClick={this.deleteClick.bind(this)} secondary={true} label="Delete 1" />
                <RaisedButton onClick={this.consoleTest.bind(this)} default={true} label="Console 1" />
            </div>    
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => {
        dispatch(CounterManipulationAdd("Add"))
    },
    onDelClick: () => dispatch(CounterManipulationDel("Del"))
  }
}

const mapStateToProps = (state) => {
  return state;
}

const CombineCounterActions = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CombineCounterActions;

// value={store.getState()} onIncrement={() => store.dispatch({ type: 'Add' })} onDecrement={() => store.dispatch({ type: 'Del' })}

