## SDK Design

The SDK provides a single module for accessing all the API methods. It is created in TypeScript and uses [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch) for http request. For bundling, [microbundling](https://www.npmjs.com/package/microbundle) package is used which minifies and compresses the compiled JS code.

### Structure
To modularize the code, each api endpoint is made into a single class which extend a Base class. The Base class has the request and requestAuth methods which send a fetch request to an enpoint and return the response. For example, the Books class extends the Base class and has three methods - `getBooks(), getBook(id), getBookChapters(book_id)` - which make use of the request method. <br>
All entities are extracted to types like Book, Chapter, etc. which contains the structre of the entity. Here it is done in a single file because of the low complexity, but can be easily expanded by extracting types to corresponding folder. <br>
This structure allows easy addition of new api endpoints as we would just add a new class that inherits Base and add the required methods.

### Packaging
The index.ts file is reponsible for abstracting all the methods of each endpoint classes into a single interface. It is done by making use of the [_Alternative Mixin Pattern_](https://www.typescriptlang.org/docs/handbook/mixins.html#alternative-pattern). Compiling is done using microbundle and is published into npm as @praveshpansari/lotrsdk.
