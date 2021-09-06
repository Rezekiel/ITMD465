//https://dog.ceo/api/breed/bulldog/images/random

import React from 'react';

class FeaturedImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div id="featured">
                <img src={this.props.url} />
            </div>
        );
    }
}
export default FeaturedImage;
