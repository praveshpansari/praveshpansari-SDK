import { Base } from "../base.js";
import { Character, Quote } from "../types.js";

const resourceName = "character";

export class Characters extends Base {
  getCharacters(token?: string): Promise<{ docs: Character[] }> {
    return this.requestAuth(`/${resourceName}`, token);
  }

  getCharacter(id: string, token?: string): Promise<{ docs: Character[] }> {
    return this.requestAuth(`/${resourceName}/${id}`, token);
  }

  getCharacterQuotes(id: string, token?: string): Promise<{ docs: Quote[] }> {
    return this.requestAuth(`/${resourceName}/${id}/quote`, token);
  }
}
