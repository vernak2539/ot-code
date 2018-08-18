## OpenTable code test

### Running

```bash
$ git clone git@github.com:vernak2539/ot-code.git
$ cd ot-code
$ npm i
$ npm start
```

### Testing

This assumes you've already installed dependencies

```bash
# run tests once
$ npm test

# run tests in watch mode
$ npm run test:watch
```

### Standards

Uses prettier as a pre-commit hook, so it will rewrite all files before they are committed. This
means that the default prettier styles are the standards this code should adhere to.

### Assumption

* input is typed correctly
* robots are not placed initially outside arena
