import React, { Component } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBuilding, faCar, faMapMarkerAlt, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons'
import noImage from '../../Resources/no-image.png';

export default class Card extends Component {

    onError(ev) {
        ev.target.src = noImage
    }

    render() {
        const link = "http://maps.google.com/?q=" + this.props.lat + "," + this.props.long;
        return (
            <div className="card">
                <div className="card-image">
                    <img src={this.props.image}
                        onError={this.onError.bind(this)}
                        alt="Fachada" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">R$ {Number.isInteger(this.props.preco) ? new Intl.NumberFormat().format(this.props.preco) : this.props.preco}</h2>
                    <h3 className="card-title"><FontAwesomeIcon icon={faBuilding} /> {this.props.nome}</h3>
                    <h4 className="card-subtitle">{this.props.cidade}</h4>
                    <p className="card-content">{this.props.bairro}, {this.props.rua}, {this.props.num}, {this.props.cep}.</p>
                    <a className="place-link" href={link} target="_blank" rel="noopener noreferrer">
                        <span className="link-text">Ver local</span> <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </a>
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