const BASE_API = 'https://yts.lt/api/v2/';

class Api {
  async getSuggestion(id) {
    try {
        const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
        const { data } = await query.json();
        return data.movies
        
    }catch(error) {
        console.log(`error: ${error}`)
    }
  }
}

export default new Api();