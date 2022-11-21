import { Base } from "../base.js";
import { Chapter } from "../types.js";

const resourceName = "chapter";

export class Chapters extends Base {
  getAllChapters(token?: string): Promise<{ docs: Chapter[] }> {
    return this.requestAuth(`/${resourceName}`, token);
  }

  getChapter(id: string, token?: string): Promise<{ docs: Chapter[] }> {
    return this.requestAuth(`/${resourceName}/${id}`, token);
  }
}
