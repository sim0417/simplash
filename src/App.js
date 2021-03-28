import React from 'react';
import style from './style/app.module.scss';
import SearchHeader from './components/SeachHeader';
import ImageViewer from './components/ImageViewer';
import unsplashApi from './util/UnsplashApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      images: [],
      serchKeyword: '',
      error: null,
    };
  }

  async componentDidMount() {
    try {
      let { data: images } = await unsplashApi.getRandomImages(10, 'doggy');
      this.setState({ images, isLoading: true });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <div className={style.appBody}>
        <SearchHeader />
        <ImageViewer images={images} />
      </div>
    );
  }
}

export default App;
