import { Base } from "../base.js";
import { Movie, Quote } from "../types.js";

const resourceName = "movie";

export class Movies extends Base {
  getMovies(token?: string): Promise<{ docs: Movie[] }> {
    return this.requestAuth(`/${resourceName}`, token);
  }

  getMovie(id: string, token?: string): Promise<{ docs: Movie[] }> {
    return this.requestAuth(`/${resourceName}/${id}`, token);
  }

  getMovieQuotes(id: string, token?: string): Promise<{ docs: Quote[] }> {
    return this.requestAuth(`/${resourceName}/${id}/quote`, token);
  }
}
