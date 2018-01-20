# todomvc-vanilla

[![Build Status][travis-img]][travis-url] [![Coverage Status][coveralls-img]][coveralls-url]

A [TodoMVC](http://todomvc.com) example using minimal tooling and evergreen features. Tooling only exists to lint, run tests, generate code coverage, and ([temporarily](#node_modules)) for the use of `node_modules` browser-side.

## Install

```command
git clone https://github.com/shannonmoeller/todomvc-vanilla.git
cd todomvc-vanilla
npm install
```

## Usage

Run server:

```command
$ npm run dev
$ npm run prod
```

Test:

```command
$ npm run test
```

## `node_modules`

Better patterns for using `node_modules` are in the works, but currently impractical:

- https://gist.github.com/ceejbot/b49f8789b2ab6b09548ccb72813a1054
- https://jakearchibald.com/2017/es-modules-in-browsers/
- https://matthewphillips.info/posts/loading-app-with-script-module

----

© Shannon Moeller <me@shannonmoeller.com> (shannonmoeller.com)

Licensed under [MIT](http://shannonmoeller.com/mit.txt)

[coveralls-img]: http://img.shields.io/coveralls/shannonmoeller/todomvc-vanilla/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/shannonmoeller/todomvc-vanilla
[travis-img]:    http://img.shields.io/travis/shannonmoeller/todomvc-vanilla.svg?style=flat-square
[travis-url]:    https://travis-ci.org/shannonmoeller/todomvc-vanilla
