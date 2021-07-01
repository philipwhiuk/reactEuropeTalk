# React Europe Talk

NB: This project currently has known vulnerable dependencies. It needs updating but isn't currently top of my priority list - use with caution.

This repository contains the source for a React Europe talk I gave at work.

It's based off the "Spectacle Boilerplate" repository with content (and some code fixes) from Josh Comeau, cut-down versions of Ken Wheeler's keynote and liberal usage of the `spectacle-code-slide` dependency. Many thanks to both of them for both the original presentations and ideas and code samples.

# Building

```bash
yarn
```
or 
```bash
npm install
```
if you're about that life.

Then, to start up the local server, run
```bash
npm start
```

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll.

## Build & Deployment

Building the dist version of the project is as easy as running
```bash
npm run build
```

If you want to deploy the slideshow to surge, run 
```bash
npm run deploy
```

Using surge is by far the easiest method of getting it to work.
