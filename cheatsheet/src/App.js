import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
  DynamicWidgets,
  Pagination,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  'MNK1G6B3KK',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">y</a>
        </h1>
        <p className="header-subtitle">
          using{' '}
          <a href="https://github.com/algolia/react-instantsearch">
            React InstantSearch
          </a>
        </p>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="instant_search">
          <div className="search-panel">
            <div className="search-panel__filters">
              <Configure facets={['*']} maxValuesPerFacet={20} />
              <DynamicWidgets fallbackWidget={RefinementList}></DynamicWidgets>
            </div>

            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit(props) {
  return (
    <article>
      <p>
        <code>{JSON.stringify(props.hit).slice(0, 100)}...</code>
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
