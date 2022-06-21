const yargs = require("yargs");

const { addMovie, listMovies } = require("./utils");

const app = (yargsObj) => {
  if (yargsObj.add) {
    addMovie({ title: yargsObj.title, actor: yargsObj.actor });
  } else if (yargsObj.list) {
    listMovies();
  } else {
    console.log("Incorrect command");
  }
};

app(yargs.argv);
