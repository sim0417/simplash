import React from 'react';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.images.length > 0 &&
          this.props.images.map((image) => {
            return (
              <div key={image.id}>
                <img src={image.urls.thumb} />
              </div>
            );
          })}
        {this.props.images.length === 0 && <div>Not found images :(</div>}
      </div>
    );
  }
}

export default ImageViewer;
