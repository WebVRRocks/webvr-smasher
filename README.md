<img src="https://raw.githubusercontent.com/caseyyee/webvr-smasher/master/client/img/icon-190.png" alt="WebVR Smasher" title="WebVR Smasher" width="220">

# WebVR Smasher

Mash and smash!

[**Play now!**](https://webvr.yoga/)


## Local development

First, clone this repo:

```bash
git clone git@github.com:caseyyee/webvr-smasher.git && cd webvr-smasher
```

To install the [Node](https://nodejs.org/en/download/) dependencies:

```bash
npm install
```

To start the server:

```bash
npm start
```


## Deployment

Commits pushed to the upstream GitHub repo are automatically deployed to [this Heroku instance](https://webvr.yoga/).

The production server is run [like so](Procfile):

```bash
NODE_ENV=production node ./app.js
```

Alternatively:

```bash
npm run prod
```

To run the server à la Heroku:

```bash
foreman start web
```


## License

All code and content within this source-code repository is licensed under the [**Creative Commons Zero v1.0 Universal** license (CC0 1.0 Universal; Public Domain Dedication)](LICENSE.md).

You can copy, modify, distribute and perform this work, even for commercial purposes, all without asking permission.

For more information, refer to these following links:

* a copy of the [license](LICENSE.md) in [this source-code repository](https://github.com/caseyyee/webvr-smasher)
* the [human-readable summary](https://creativecommons.org/publicdomain/zero/1.0/) of the [full text of the legal code](https://creativecommons.org/publicdomain/zero/1.0/legalcode)
* the [full text of the legal code](https://creativecommons.org/publicdomain/zero/1.0/legalcode)
