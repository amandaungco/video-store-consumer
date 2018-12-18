import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';



const SearchList = (props) => {
  const SearchList = props.resultList.map((result) => {
    return <SearchResult key={result.external_id}
             selectResultCallback={props.selectResultCallback}
             {...result} />
  });

  return (
    <div className="card-group">
      {SearchList}
    </div>
  )
}

SearchList.propTypes = {
  resultList: PropTypes.array.isRequired,

};

export default SearchList;
