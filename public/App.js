import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Counter from './Counter';
import { connect } from 'react-redux';
import { CounterManipulationToggle } from './action';

class App extends React.Component{

    constructor(props){

        super(props);

        this.consoleHandler = this.consoleHandler.bind(this);
        
    }

    toggleCounter(){

        this.props.onToggleCounter();

    }

    consoleHandler(e){

        console.log(e);
        
    }

    render(){

       return(
            <div className="appBar">
                <AppBar onLeftIconButtonTouchTap={this.toggleCounter.bind(this)}
                    title="Hello Redux"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                < Counter consoleHandler={this.consoleHandler}  />
            </div>
       )

    }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleCounter: () => {dispatch(CounterManipulationToggle("Toggle"))}
  }
}

const mapStateToProps = (state) => {
  return state;
}

const CombineApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default CombineApp;