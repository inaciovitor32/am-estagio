import React, { Component } from 'react';
import './styles.css';
import cover from '../../Resources/cover.jpg';

export default class Hero extends Component {
    render() {
        return (<div className="hero">
            <img className="hero-image" src={cover} alt="Imagem de capa" />
            <div className="hero-container">
                <h1>Imóveis à venda</h1>
            </div>
        </div>
        );
    }
}