import React from 'react';

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <article>
          <h2>SIMPLASH</h2>
          <p>
            The internet’s source of <strong>freely-usable images.</strong>
          </p>
          <p>
            Powered by{' '}
            <a href="https://unsplash.com" target="_blank">
              Unsplah API
            </a>
          </p>
        </article>
        <article>
          <div>
            <input type="text" value="" placeholder="Search photos" />
          </div>
        </article>
      </section>
    );
  }
}

export default SearchHeader;
