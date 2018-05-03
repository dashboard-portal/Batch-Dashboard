# BATCH DASHBOARD

This small app will take care of presenting batch data using creative ways, in the way that it apports with meaningful information with just looking at it.
  
_Note: If needed some screenshots can be included in here._

## Getting Started

### Dependencies

* [ReactJS 16.3](https://reactjs.org/docs/hello-world.html)
* [react-router-dom](https://reacttraining.com/react-router/web/guides/philosophy)
* [Redux](https://redux.js.org/)
* [redux-observable](https://redux-observable.js.org/)
* [RxJS](http://reactivex.io/rxjs/)

### Sep Up

Once the branch is syncronized:

```sh
$ npm install
```
or with **"yarn"**
```sh
$ yarn
```

Followed by:

```sh
$ npm run start
```
or with **"yarn"**
```sh
yarn start
```

### XTIME Branding
For xtime branding refer to [this guide](https://confluence.xtime.com/x/-AHZAg)

### Docker Container for development
This repo contains to files to start a development container to avoid installing the needed dependencies in a local environment. To use a container for development follow the instructions:

1. From the root directory of the project build the image using `docker-compose`
```sh
$ docker-compose build
```
2. Once the project image is successfully created you can start a container with that image as base
```sh
$ docker-compose up
```
This by default starts the container with the application in the port 8080 in your local machine. Visit [http://localhost:8080](http://localhost:8080)
3. Modify the source code from you local machine, the changes will be reflected in the container.

## License

MIT.
