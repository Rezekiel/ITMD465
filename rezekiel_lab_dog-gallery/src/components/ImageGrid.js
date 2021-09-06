// https://dog.ceo/api/breed/bulldog/images/random/50


import React from 'react';


class ImageGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }
    componentDidMount() {
        fetch("https://dog.ceo/api/breed/bulldog/images/random/50")
            .then(response => response.json())
            .then(result =>
                this.setState({ photos: result.message })
            )
      }
    render() {
        return (
            <div className="jumbotron" id="gallery">
                {this.state.photos.map(imglink => {
                    return (
                        <div className="picturecontainer">
                            <img src={imglink} onClick={(e) => { console.log(e.target);this.props.selectedpicture(e.target.src) }}/>
                        </div>)})}
            </div>
        );
    }
}

export default ImageGrid;
