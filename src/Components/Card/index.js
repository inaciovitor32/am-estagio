import React, { Component } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBuilding, faCar, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons'
import noImage from '../../Resources/no-image.png';

export default class Card extends Component {

    onError(ev) {
        ev.target.src = noImage
    }

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src={this.props.image}
                        onError={this.onError.bind(this)}
                        alt="Fachada" />
                </div>
                <div className="card-body">
                    <h3 className="card-title">R$ {Number.isInteger(this.props.preco) ? new Intl.NumberFormat().format(this.props.preco) : this.props.preco}</h3>
                    <h3 className="card-title"><FontAwesomeIcon icon={faBuilding} /> {this.props.nome}</h3>
                    <h4 className="card-subtitle">{this.props.cidade}</h4>
                    <p className="card-content">{this.props.bairro}, {this.props.rua}, {this.props.num}, {this.props.cep}.</p>
                    <div className="card-hero">
                        <p><FontAwesomeIcon icon={faRulerHorizontal} /> {this.props.metragem}&#x33A1;</p>
                        <p><FontAwesomeIcon icon={faBed} /> {this.props.dorms} Dormitório(s)</p>
                        <p><FontAwesomeIcon icon={faCar} /> {this.props.vagas} Vaga(s)</p>
                    </div>
                </div>
            </div>
        );
    }
}