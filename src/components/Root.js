import React from 'react';
import Counter from './Counter';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      loading: false
    };
  }

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

  
  render() {
    return (
      <div>
        <Counter 
          count={this.state.count}
          onHitClick={this.onHitClick}
        />
      </div>
    );
  }
}

export default Root;