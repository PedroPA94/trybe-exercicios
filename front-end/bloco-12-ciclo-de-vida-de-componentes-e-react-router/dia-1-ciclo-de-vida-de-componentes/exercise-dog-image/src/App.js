import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      image: '',
      loading: true,
      dogName: '',
    };
  }

  componentDidMount() {
    if (localStorage.savedDog) {
      const savedDog = localStorage.getItem('savedDog').split(',')[1];
      this.setState({
        image: savedDog,
        loading: false,
      });
    } else {
      this.fetchImage();
    }
  }

  shouldComponentUpdate() {
    const { image } = this.state;
    return !image.includes('terrier');
  }

  saveToLocalStorage = (message) => {
    const { dogName } = this.state;
    const savedDog = [dogName, message];
    localStorage.setItem('savedDog', savedDog);
  }

  alertRace = (message) => {
    const RACE_POSITION = 30;
    const dogRaceLowerCase = message.substr(RACE_POSITION).split('/')[0];
    const dogRaceProper = dogRaceLowerCase[0].toUpperCase() + dogRaceLowerCase.substr(1);
    alert(`Raca: ${dogRaceProper}`);
  }

  fetchImage = async () => {
    this.setState({
      loading: true,
    }, async () => {
      const request = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await request.json();
      const { message } = data;
      this.setState({
        image: message,
        loading: false,
      }, () => this.alertRace(message));
    });
  }

  handleInput = ({ target }) => {
    const { value } = target;
    this.setState({
      dogName: value,
    });
  }

  render() {
    const { loading, image, dogName } = this.state;
    const loadingMessage = <p>Loading...</p>;
    const dogImage = <img src={ image } alt="Dog pic" />;
    if (loading) { return loadingMessage; }
    return (
      <div className="App">
        { dogImage }
        <input type="text" onChange={ this.handleInput } value={ dogName } />
        <button type="button" onClick={ () => this.saveToLocalStorage(image) }>
          Salvar doguinho!
        </button>
        <button type="button" onClick={ this.fetchImage }>Buscar um doguinho!</button>
      </div>
    );
  }
}

export default App;
