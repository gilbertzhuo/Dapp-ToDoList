import './App.css';
import Web3 from 'web3';
import React, { Component } from 'react';

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }
  async loadBlockchainData(){
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
  }
  constructor(props) {
    super(props)
    this.state = { account: ''}
  }
  render() {
  return (
    <div className="container">
      <h1>Hello, world</h1>
      <p>Your account: {this.state.account}</p>
    </div> 
  );
  } 
}

export default App;
