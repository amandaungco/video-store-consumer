import React, {Component} from 'react';
import SearchList from './SearchList'
import SearchBar from './SearchBar'
import axios from 'axios';


const URL = "http://localhost:3000/movies?query="

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
    axios.get(URL + `${query}`)

    .then((response) => {
      console.log(response)
      const resultList = response.data.map((result) => {
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
