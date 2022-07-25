import axios from "axios"
import { REACT_APP_MOVIE_API_KEY } from "../../../env"
import { ISearchKeywordResult } from "./search.type"

export class SearchService {
  private apiURL: string
  private REACT_APP_MOVIE_API_KEY: string
  constructor() {
    this.apiURL = 'https://api.themoviedb.org/3/'
    this.REACT_APP_MOVIE_API_KEY = REACT_APP_MOVIE_API_KEY as string
  }

  private makeApiCall = async <T>(apiPath: string): Promise<T> => {
    const response = await axios.get(`${this.apiURL}${apiPath}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    if (!response.data) {
      throw new Error(`Error from api call ${apiPath}: status=${response.status} ${response.statusText}`)
    }
    return response.data
  }

  public getSearchKeyword = async (query: string) => {
    const response = await this.makeApiCall<ISearchKeywordResult>(
      `search/keyword?api_key=${this.REACT_APP_MOVIE_API_KEY}&query=${query}`
    )
    if (!response.results) {
      throw new Error('Genres not found')
    }
    return response
  }

}