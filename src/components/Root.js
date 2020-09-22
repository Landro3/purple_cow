import React from 'react';
import Counter from './Counter';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
    };
  }

  // Get initial count when page loads
  componentDidMount() {
    if (this.state.count == null) {
      fetch(
        'https://api.countapi.xyz/get/1ccb732e-b55a-4404-ad3f-0f99c02fe44e',
        {
          method: 'GET'
        }
      )
      .then((response) => response.json())
      .then((data) => {
        const value = data.value;
        this.setState(() => ({ count: value }))
      })
    }
  }
 
  // When button is clicked, GET from hit endpoint and update state
  onHitClick = () => {
    fetch(
      'https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e',
      {
        method: 'GET'
      }
    )
    .then((response) => response.json())
    .then((data) => {
      const value = data.value;
      this.setState(() => ({ count: value }))
    })
  }

  // Multiple Counters can be rendered here
  render() {
    return (
      <div>
        {this.state.count == null && <p>Loading...</p>}
        <Counter 
          count={this.state.count}
          onHitClick={this.onHitClick}
        />
      </div>
    );
  }
}

export default Root;