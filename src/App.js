import React from 'react';
import style from './style/app.module.scss';
import SearchHeader from './components/SeachHeader';
import ImageViewer from './components/ImageViewer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      serchKeyword: '',
    };
  }

  componentDidMount() {}

  render() {
    const { images } = this.state;

    return (
      <div className={style.appBody}>
        <SearchHeader />
        <ImageViewer images={images} />
      </div>
    );
  }
}

export default App;
