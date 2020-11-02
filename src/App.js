import React, { Component } from 'react';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import './App.css';
import Hero from './Components/Hero';
import Toolbar from './Components/Toolbar';
import Card from './Components/Card';
import Spinner from './Components/Spinner';
import FAB from './Components/FAB';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      city: "",
      isLoading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.sortingHandler = this.sortingHandler.bind(this);
  }

  getEntries() {
    const options = { method: 'GET', url: 'https://api.estagio.amfernandes.com.br/imoveis' };

    axios.request(options)
      .then(res => { this.setState({ entries: res.data }) })
      .then(() => { this.setState({ isLoading: false }) })
  }

  handleChange(event) { this.setState({ city: event.target.value }) }

  sortingHandler(event) {
    if (event.target.value === "none") {
      this.setState({ isLoading: true })
      this.getEntries();
    }
    if (event.target.value === "nomeaz") {
      this.setState({ entries: this.state.entries.sort((a, b) => (a.nome > b.nome) ? 1 : -1) })
    }
    if (event.target.value === "nomeza") {
      this.setState({ entries: this.state.entries.sort((a, b) => (a.nome < b.nome) ? 1 : -1) })
    }
  }

  componentDidMount() {
    this.getEntries();
  }

  render() {
    return (
      <div className="App">
        <Hero />
        <Toolbar onChange={this.handleChange} sortingHandler={this.sortingHandler} />
        <FAB onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} />
        {!(this.state.isLoading) ? (
          this.state.entries
            .filter(entry => entry.cidade.includes(this.state.city))
            .map((filteredEntries, index) => {

              if (filteredEntries.planta !== undefined) {
                return (
                  <LazyLoad key={index} height={'100%'} offset={[-100, 100]} placeholder={<Spinner />}>
                    <Card
                      key={index}
                      image={filteredEntries.fachada}
                      preco={(!filteredEntries.planta["preco"]) ? "Não informado" : filteredEntries.planta["preco"]}
                      nome={filteredEntries.nome}
                      cidade={filteredEntries.cidade}
                      bairro={filteredEntries.bairro}
                      rua={filteredEntries.rua}
                      num={(!filteredEntries.num) ? "Número não informado" : filteredEntries.num}
                      cep={(!filteredEntries.cep) ? "CEP não informado" : filteredEntries.cep}
                      metragem={filteredEntries.planta["metragem"]}
                      dorms={filteredEntries.planta["dorms"]}
                      vagas={filteredEntries.planta["vagas"] ? (filteredEntries.planta["vagas"]) : (0)}
                      lat={filteredEntries.location["_lat"]}
                      long={filteredEntries.location["_long"]} />
                  </LazyLoad>
                );
              }
              else {
                return (
                  <LazyLoad key={index} height={100} offset={[-100, 100]} placeholder={<Spinner />}>
                    <Card
                      key={index}
                      preco={"Não informado"}
                      image={filteredEntries.fachada}
                      nome={filteredEntries.nome}
                      cidade={filteredEntries.cidade}
                      bairro={filteredEntries.bairro}
                      rua={filteredEntries.rua}
                      num={(!filteredEntries.num) ? "Núm. não informado" : filteredEntries.num}
                      cep={(!filteredEntries.cep) ? "CEP não informado" : filteredEntries.cep}
                      metragem={"N/D"}
                      dorms={"N/D"}
                      vagas={"N/D"}
                      lat={filteredEntries.location["_lat"]}
                      long={filteredEntries.location["_long"]} />
                  </LazyLoad>
                );
              }
            }
            )
        ) : (<Spinner />)}
      </div>
    );
  }
}