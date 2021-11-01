
import React from 'react';

class Parent extends React.Component {
    
    render() {
        return (
            <div>
                <Child data={3} />
                <Child data={"This is String"} />
                <Child data={new Date().toString()} />
            </div>
        )
    }
}

class Child extends React.Component {
    
    render() {
      return (
            <div>
                <p>{typeof this.props.data}:{this.props.data}</p>
            </div>
        )
    }
}

export default Parent;
