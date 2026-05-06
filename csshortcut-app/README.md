# CSShortcut APP

> Criado para guardar codigo das aulas realizadas no curso:
- Front end da vida real.

## Stack

- Task Runner: [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start/)
- HTML Template Engine: [Pug](https://pugjs.org/api/getting-started.html)
- CSS Preprocessador: [Stylus](https://stylus-lang.com)

## Run the project locally

**1 -** Prepare the enviroment:
```sh
$ npm install -g gulp-cli
```

**2 -** Clone the project and install the dependencies:
```sh
$ git clone https://github.com/PaulinhaFigueiredodev/Front-end_na_vida_real
$ cd csshortcut-app
$ npm install
```
**3 -** Run static server and livereload:
```sh
$ gulp server
```

## Folders Structure

	.
	├── README.md
	├── LICENSE.md
	├── CONTRIBUTING.md
	├── out/
	├── src/
	|   ├── icons/
	|   ├── assets/
	|   |   ├── img/
	|   |   ├── scripts/
	|   |   |   └── script.js
	|   |   └── styles/
	|   |       ├── modules/
	|   |       └── style.styl
	|   ├── partials/
	|   |   ├── footer.pug
	|   |   └── header.pug
	|   ├── layouts/
	|   |   └── default.pug
	|   ├── projects.pug
	|   └── index.pug
	├── gulpfile.js
	├── package.json
	├── projects.json
	├── .editorconfig
	└── .gitignore

## Automatic Tasks

- `$ gulp build`: Compile, concat and minify all files.
- `$ gulp server`: Watch the files to build and start a static server.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing
Find on our [roadmap](https://github.com/PaulinhaFigueiredodev/Front-end_na_vida_real/tree/main/csshortcut-app) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations]().

## License
[MIT License]()