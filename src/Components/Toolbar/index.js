import React, { Component } from 'react';
import './styles.css';

export default class Toolbar extends Component {
    render() {
        return (
                <form className="toolbar">
                    <label htmlFor="cities">Cidade:</label>
                    <select className="select-css" onChange={this.props.onChange} name="cities" id="cities">
                        <option value="">Mostrar todas</option>
                        <option value="Santo André">Santo André</option>
                        <option value="São Bernardo">São Bernardo</option>
                        <option value="São Caetano do Sul">São Caetano do Sul</option>
                    </select>
                    <label htmlFor="order">Ordem:</label>
                    <select className="select-css" onChange={this.props.sortingHandler} name="order" id="order">
                        <option value="none">Nenhuma</option>
                        <option value="nomeaz">Nome A - Z</option>
                        <option value="nomeza">Nome Z - A</option>
                    </select>
                </form>
        );
    }
}