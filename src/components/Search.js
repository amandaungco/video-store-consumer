import React, {Component} from 'react';
import SearchList from './SearchList'
import SearchBar from './SearchBar'
import axios from 'axios';


// {name: 'Elf', genre: 'funny', about: 'great movie about a man in a red suit'}, {name: 'test', genre: 'cute', about: 'great movie about a woman in a red suit'}
//
const URL = "https://api.themoviedb.org/3/search/movie?api_key="
const API_KEY = "161b3d718398488fdf5752738c1b2b60"

class Search extends Component {
  constructor(){
    super()
    this.state = {
      resultList:[]
    }
  }

  onSearchChange = (query) => {
    this.listResults(query)
  }

  listResults = (query) => {
    axios.get(URL + API_KEY + "&query=" + `${query}`)
    .then((response) => {
      console.log(response.data.results)
      const resultList = response.data.results.map((result) => {
        console.log(result)
        const newResult = {
          ...result,
          imageUrl:result.backdrop_path,
          title: result.title,
          releaseDate: result.release_date,
          overview: result.overview ? result.overview: "",
        }
        return newResult
      })
      this.setState ({
        resultList
      });

    })
    .catch((error) => {
      console.log(error.message);
      console.log("this is the catch")
      this.setState({
        errorMessage: error.message,
      });

    });
  }

  render() {
    return (
      <section>
        <SearchBar onSearchCallback = {this.onSearchChange}/>

        <h3>
          { this.state.resultList.length > 0 && `Showing ${this.state.resultList.length} results` }
        </h3>
        <SearchList
          resultList = {this.state.resultList}
          />
      </section>
    )}
  }

  export default Search;
