import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions";

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}
                />
                <CounterControl
                    label="Add 5"
                    clicked={this.props.onAddCounter}
                />
                <CounterControl
                    label="Subtract 5"
                    clicked={this.props.onSubtractCounter}
                />
                <br />
                <button onClick={this.props.onStoreResult.bind(this, this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.storedResults.map((result) => {
                        return (
                            <li
                                onClick={this.props.onDeleteResult.bind(
                                    this,
                                    result.id
                                )}
                                key={result.id}
                            >
                                {result.value} - {result.id.toTimeString()}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter.counter,
        storedResults: state.results.results,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 10 }),
        onSubtractCounter: () =>
            dispatch({ type: actionTypes.SUBTRACT, value: 10 }),
        onStoreResult: (counter) => dispatch({ type: actionTypes.STORE_RESULT, counter: counter }),
        onDeleteResult: (id) =>
            dispatch({ type: actionTypes.DELETE_RESULT, id: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
