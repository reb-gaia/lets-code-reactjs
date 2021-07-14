import React from 'react';

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      txtNome: '',
    };
  }

  changeTxtName(e) {
    this.setState({txtNome: e.target.value});
  }

  persistName = () => {
    this.setState({nome: this.state.txtNome});
  }

  render() {
    const renderForm = () => {
      return (
        <div>
          Nome: <input type="text" onChange={this.changeTxtName.bind(this)}></input>
          <button onClick={this.persistName}>Salvar</button>
        </div>
      );
    }

    const renderTxt = () => {
      return (
        <div>
          <p>Olá {this.state.nome} </p>
        </div>
      );    
    }

    return !this.state.nome ? renderForm() : renderTxt();
  }
}

export default App4;