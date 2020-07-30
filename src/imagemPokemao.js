import React from 'react';

class ImagemPokemao extends React.Component {
  render() {
    return <img src={this.props.source} alt="pokepoke"/>
  }
}

export default ImagemPokemao;