# Traffic Cut Notifier [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)
## :scroll: Introduction

Consuming OpenData from the Malaga city council, it applies to any OpenData source, informing the user of traffic cuts in the city.

## :busts_in_silhouette: Development methodology

*   Git Flow
    *   It are a set of git extensions to provide high-level repository operations for branching model
    *   See more info at [workflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)
*   Git conventions
    *   The method to keep only one style to push commit at origin
    *   Automatically generating CHANGELOGs
    *   See more info at [conventional commits](www.conventionalcommits.org/en/v1.0.0/)

## :computer: Execute development environment

A Project setup
```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

Compiles and minifies for production
```
npm run build
```

_Customize configuration._
See [Configuration Reference](https://cli.vuejs.org/config/).


## :computer: Execute application environment

We can change parameters to run in _.env_ file and performance configuration step:

```
docker-compose config
```

The next step must be to build images and run containers:

```
docker-compose up
```
