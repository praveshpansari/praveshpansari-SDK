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

  getCharacterQuotes(character_id: string, token?: string): Promise<{ docs: Quote[] }> {
    return this.requestAuth(`/${resourceName}/${character_id}/quote`, token);
  }
}
