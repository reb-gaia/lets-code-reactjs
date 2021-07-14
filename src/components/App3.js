import React from 'react';

class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
    };
  }

  changeName(e) {
    this.setState({nome: e.target.value});
  }

  render() {
    return (
      <div>
        Nome: <input type="text" value={this.state.nome} onChange={this.changeName.bind(this)}></input>
        <p>Olá {this.state.nome} </p>
      </div>
    );
  }
}

export default App3;