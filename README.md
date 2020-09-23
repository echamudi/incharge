# InCharge⚡️

> ⚠️ Deprecated: No longer works with the latest Invision update

![InCharge Logo](https://ezhmd.github.io/incharge/logo/logo-incharge.svg)

Recharge InVision App with additional features

## About This Project

### What?

I'm a UI designer and I use InVision App a lot. InVision App is a great tool for making prototypes but there are some missing useful features in its UI. This project contains several hacks that will save my (and might be your) time in InVision App.

### Caution

This plugin might break your InVision project. Use it at your own risk. But, I've been using it on a big InVision project (500+ screens, 60+ hotspot templates, 35+ screen groups) without any problem 😃.

### The Hacks

#### Actions

- Screen List
    - Collapse all sections
    - Expand all sections
- Build Mode
    - Sort hotspot templates (Top Dropdown) (display only, sorted list won't be saved)

#### UI Fixes

- General
    - No transition (switchable) _(planned)_
- Screen List
    - Always displayed file name
    - Always displayed date
    - Wider divider label input 
    - Always displayed section tools (switchable) _(planned)_
    - Always displayed project-sync (switchable) _(planned)_
    - Wider filename label _(planned)_
- Preview Mode
    - Download current image _(planned)_
- Build Mode
    - No ellipses

## Usage

1. Install tampermonkey on your browser
2. [Click here](https://github.com/ezhmd/incharge/raw/master/dist/incharge.user.js)
3. A tampermonkey tab will be triggered, then click install

## Development

You need node.js installed in your computer.

### Installation

```sh
npm install
```

### Developing

All you need to edit are the files inside `src` folder.

### Building

```sh
npx webpack --mode=development
```

Always use `--mode=development` even for production. Commit the compiled file (`dist/incharge.user.js`).

## Contributing

Make sure your contributions are compatible with the license of this code.

## Authors

* **Ezzat Chamudi** - [ezhmd](https://github.com/ezhmd)

## License

Code and documentation copyright 2019 the [InCharge Project Authors](https://github.com/ezhmd/incharge/graphs/contributors). 

InCharge code is licensed under [MPL-2.0](https://www.mozilla.org/en-US/MPL/2.0/). Images, logos, docs, and articles in this InCharge project are released under [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/legalcode).

Libraries, dependencies, and tools used in this project are tied with their own licenses respectively.

