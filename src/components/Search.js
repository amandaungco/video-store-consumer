import React, {Component} from 'react';
import SearchList from './SearchList'

class Search extends Component {
  constructor(){
    super()

    this.state = {
      resultList:[{name: 'Elf', genre: 'funny', about: 'great movie about a man in a red suit'}, {name: 'test', genre: 'cute', about: 'great movie about a woman in a red suit'} ]
    }
  }
  render() {
    return (
    <section>
    <p> Search This is where the form that will query the API will go, I'll hold whatever gets returned in the state. It'll also call the SearchList Component </p>
    <SearchList
    resultList = {this.state.resultList}
    />
    </section>
  )}
}

export default Search;
