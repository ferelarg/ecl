# Installation

## Install
You need to have installed [Node](https://nodejs.org/es/). If you are using Linux or Mac, I recommend using [NVM](https://github.com/nvm-sh/nvm#installing-and-updating).

Once you have `Node` installed, you have to clone the repositories and install `yarn` as a dependency manager:
```sh
dev$ https://github.com/multimake/ecl.git
dev$ https://github.com/multimake/elc.git
dev$ cd ecl
dev$ npm install -g yarn@latest
dev$ yarn
```

## Local development
For local development, you need `three environment variables`.
```
$ export PROJECT_PATH="path to elc repo"
$ export SKIP_VERSION_CHECK=1
$ export CRUNCHBASE_KEY_4="Crunchbase API Key"
```

After making your changes to `landscape.yml`, run:
```
$ npm run fetch
```
to fetch any needed data and generate [processed_landscape.yml](https://github.com/multimake/elc/blob/master/processed_landscape.yml)

If you want to see the changes on a development server, run:
```
$ npm run open:src
```


## Adding a image

1. Save the logo to `src/hosted_logos/`, for example, `src/hosted_logos/apex.svg`. Use lowercase spinal case (i.e., hyphens) for the name.
1. Update landscape.yml, for example, `logo: ./src/hosted_logos/apex.svg`. The location must start with`./src/hosted_logos`.
1. If you've updated the local logo since a previous commit, you need to delete the cached version in `src/cached_logos/`. E.g., delete `src/cached_logos/apex.svg`.
1. Update `processed_landscape.yml` with `npm run fetch`.
1. Commit and push.

