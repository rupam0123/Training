import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class Counter extends React.Component {
    state = { count: 0 }

    onIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }
    onDecrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    onReset = () => {
        this.setState({ count: 0 })
    }



    render() {

        return (
            <div>
                <p style = {{margin:50} }>{this.state.count}</p>
                <Button variant="primary" onClick={this.onIncrement}>Increment</Button>{' '}
                <Button variant="secondary" onClick={this.onDecrement}>Decrement</Button>{' '}
                <Button variant="danger" onClick={this.onReset}>Reset</Button>


            </div>
        )
    }
}
export default Counter