import { Base } from "../base.js";
import { Book, Chapter } from "../types.js";

const resourceName = "book";

export class Books extends Base {
  getBooks(): Promise<{ docs: Book[] }> {
    return this.request(`/${resourceName}`);
  }

  getBook(id: string): Promise<{ docs: Book[] }> {
    return this.request(`/${resourceName}/${id}`);
  }

  getBookChapters(book_id: string): Promise<{ docs: Chapter[] }> {
    return this.request(`/${resourceName}/${book_id}/chapter`);
  }
}
