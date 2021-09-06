import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Featuredimage from './components/FeaturedImage';
import ImageGrid from './components/ImageGrid';
import frenchie from './components/frenchie.png'; //img path for french image

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://dog.ceo/api/breed/bulldog/images/random",
      photos: []
    };
    this.setpicture=this.setpicture.bind(this);
  }
setpicture(picture){
  this.setState({
    url:picture
  })
}
componentDidMount() {
        fetch("https://dog.ceo/api/breed/bulldog/images/random")
            .then(response => response.json())
            .then(result =>
                this.setState({url: result.message })
            )
    }
  render() {
    return (
      <div className="App">
        <div className="banner">
          <h1> French Bully Gallery</h1>
          <h3>ITMD 465-Rezekiel@iit.edu</h3>
          <img src={frenchie} alt="frenchie logo" />
        </div>
        <Featuredimage url={this.state.url}/>
        <ImageGrid photos={this.state.photos} selectedpicture ={this.setpicture}/>
      </div>
    );
  }
}

export default App;
