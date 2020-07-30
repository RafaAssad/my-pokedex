import React from 'react';
import ImagePokemao from './imagemPokemao';

class Pokedex extends React.Component {
    render() {
        const { id, name, type, averageWeight, image } = this.props;
        return (
            <div className = {`estiloPokemao ${this.props.type}`}>
            <p className = 'textin'>
            <ul><strong>{name} #{id}</strong></ul>
            <ul>Type: {type} </ul>
            <ul>Weight: {averageWeight.value} kg</ul>
             </p>
            <div className = 'gif'><ImagePokemao source = {image}/></div>
            
            </div>
        )
    }
}

export default Pokedex;