import { Base } from "../base.js";
import { Quote } from "../types.js";

const resourceName = "quote";

export class Quotes extends Base {
  getQuotes(token?: string): Promise<{ docs: Quote[] }> {
    return this.requestAuth(`/${resourceName}`, token);
  }

  getQuote(id: string, token?: string): Promise<{ docs: Quote[] }> {
    return this.requestAuth(`/${resourceName}/${id}/quote`, token);
  }
}
