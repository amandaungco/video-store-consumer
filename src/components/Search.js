import React, {Component} from 'react';
import SearchList from './SearchList'


// {name: 'Elf', genre: 'funny', about: 'great movie about a man in a red suit'}, {name: 'test', genre: 'cute', about: 'great movie about a woman in a red suit'}
//

class Search extends Component {
  constructor(){
    super()

    this.state = {
      searchValue: '',
      resultList:[]
    }

  }

  onSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });

    // this.props.onSearchChange(event.target.value);
    console.log(this.state)
  }

  // componentDidMount(){
  //   axios.get(this.props.url + this.props.boardName +'/cards')
  //   .then((response) => {
  //     console.log(response)
  //     const newCards = response.data.map((card, index) => {
  //       return {
  //         cardText: card.card.text,
  //         cardEmoji: card.card.emoji,
  //         cardId: card.card.id
  //
  //       }
  //     });
  //
  //     this.setState ({
  //       cards: newCards,
  //     })
  //
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //     console.log("this is the catch")
  //     this.setState({
  //       errorMessage: error.message,
  //     });
  //
  //   });
  // }

  render() {
    return (
      <section>
        <section>
          <input
            onChange={this.onSearchChange}
            value={this.state.searchValue}
            name="search-bar"
            className="search-bar"
            placeholder="Search Movies"
          />
        </section>
      <p> Need to add form that wil hold the query variable

      use the search vaalue from the state/form and query the APi with a get request

      format the API Respose and create result componnents to show all resultList

      modify select function to have movie selected added to the RAIls api


      This is where the form that will query the TMDB API will go, I'll hold whatever gets returned in the state. It'll also call the SearchList Component </p>
      <SearchList
      resultList = {this.state.resultList}
      />
      </section>
    )}
  }

  export default Search;
