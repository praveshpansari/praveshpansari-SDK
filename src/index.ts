import { Base } from "./base.js";
import { Books } from "./book/books.js";
import { Chapters } from "./chapter/chapter.js";
import { Characters } from "./character/character.js";
import { Movies } from "./movie/movies.js";
import { Quotes } from "./quote/quote.js";
import { applyMixins } from "./util.js";

class LotrSDK extends Base {}

interface LotrSDK extends Books, Chapters, Characters, Movies, Quotes {}

applyMixins(LotrSDK, [Books, Chapters, Characters, Movies, Quotes]);

export default LotrSDK;
