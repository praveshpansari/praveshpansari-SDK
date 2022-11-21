# praveshpansari-SDK

## Installation

1. Run `npm i @praveshpansari/lotrsdk` in an npm directory

## Usage

1. Import the LotrSDK module `import LotrSDK from "@praveshpansari/lotrsdk";`
2. Initialize the client `const client = new LotrSDK(config);`. Config can have:
     - _baseUrl_: optional - Override the default URL of https://the-one-api.dev/v2
     - _permanentToken_: optional - Specify the authorization token for the LOTR Api
3. Use the client to invoke api methods. All methods return a promise. Example: <br><br>
  
    Using access token for each api
    ```
    import LotrSDK from "@praveshpansari/lotrsdk";

    const client = new LotrSDK({});

    // Using token directly instead of permanent token
    client.getMovies("PCd1Bi2UxLXjQ3mFTWH0").then((response) => console.log(response));
    ```

    Using permanent token
    ```
    import LotrSDK from "@praveshpansari/lotrsdk";

    // Using permanent token
    const client = new LotrSDK({permanentToken:"PCd1Bi2UxLXjQ3mFTWH0"});

    client.getMovies().then((response) => console.log(response));
    ```
 ## List of Methods
- `getBook(id)` - No auth required
- `getBooks()` - No auth required
- `getBookChapters(book_id)` - No auth required
- `getChapters()`
- `getChapter(id)`
- `getCharacters()`
- `getCharacter(id)`
- `getCharacterQuotes(character_id)`
- `getMovies()`
- `getMovie(movie_id)`
- `getMovieQuotes(movie_id)`
- `getQuotes()`
- `getQuote(id)`
