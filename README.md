# proper-next-js-container

Too many versions are flying on the internet and most of them are really a pain
in the _neck_. This version is intented for really small projects but should be
good enough for deploying in production.

It should allow any developer to build, run, test and deploy a react application,
with propper encapsulation and minimal configuration.

This may not be suited for a _professional_ environment where integration with a
CI/CD pipeline is a standard and has some specific needs.


## Some intentions

- a javascript version (just to mess with the newcommers)
- a typescript version for the ones that want an easy life

## Usage

Before starting your project you should create an .env file with db credentials.
Or you may use the provided init script for convenience:

```bash
./init-env.sh
```

### Steps

1. `./init-env.sh`
1. `yarn install`
1. `docker compose build`
1. `docker compose run www shell`
   - you may want to create next app manually
1. `docker compose run --service-ports www dev`
