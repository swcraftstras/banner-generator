# Banner generator for Software Craft Strasbourg Meetup

[Use it live](https://swcraftstras.github.io/banner-generator/)

- Vanilla JS
- Javascript modules
- No build
- Vendored dependencies are in [public/lib/vendor](lib/vendor) with sources, license and link to origin

## Features

- Banner preview
- Png banner export
- Live update
- Localstorage (keeps data if window is reloaded)

## Run locally

```shell
npx vite preview --outDir .
```

## Compatibilité navigateur

Baseline 2006

- [CSS 2.1 attribute selector](https://caniuse.com/css-sel2)

Baseline 2013

- [CSS child combinator `A > B`](https://caniuse.com/mdn-css_selectors_child)

Baseline 2015

- [canvas](https://caniuse.com/canvas)
- [CSS flexbox](https://caniuse.com/flexbox)

Baseline 2017

- [gap](https://caniuse.com/mdn-css_properties_gap)
- [CSS variables (custom properties)](https://caniuse.com/css-variables)

Baseline 2018

- [es6 Script modules](https://caniuse.com/es6-module)

Baseline 2020
- [min-content](https://caniuse.com/wf-min-max-content)
