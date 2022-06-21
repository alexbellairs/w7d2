const fs = require("fs");
const { builtinModules } = require("module");

const addMovie = (movieObj) => {
  try {
    const stringyObj = JSON.stringify(movieObj);
    fs.writeFileSync("./storage.json", stringyObj);
  } catch (error) {
    console.log(error);
  }
};

const listMovies = () => {
  try {
    const movieList = fs.readFileSync("./storage.json");
    const list = JSON.parse(movieList);
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addMovie, listMovies };
