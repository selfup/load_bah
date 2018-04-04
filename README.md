# Docker Deeds Template for Node/Heroku

**[Install Docker Community Edition](https://store.docker.com/search?type=edition&offering=community) on your OS if you haven't already**

### Local Development

**WINDOWS**

Please go to `docker-compose.yml` and swap the `command:` (uncomment the first one and comment out the second one).

There are comments to help :smile:

**macOS / Unix / Linux**

Nothing to to do :joy:

***

Now run:

```bash
docker-compose up
```

Write code in your editor as normal.

Nodemon will intercept host file changes and update node process in container.

Visit: [localhost:8080](http://localhost:8080)

**if you add deps or dev deps**

1. `ctrl + C` where the `docker-compose up` process is running
1. `docker-compose up` again to rebuild
1. if it doesn't rebuild: `docker-compose build && docker-compose up`

**if you want to add postgres, add it in your compose file**

1. this gets a bit "complex" so for now we will leave this to be DB-less until this gets comfortable

### Login to Heroku CLI stuffs

```bash
$ heroku login
```

then

```bash
$ heroku container:login
```

### Create Heroku WEB app

```bash
$ heroku create
```

### Once WEB app is created

_replace `evening-shelf-95177` with your app name_

```bash
$ heroku container:push web --app evening-shelf-95177
```

This will push your container to the heroku dyno

### Once pushed to registry

_replace `evening-shelf-95177` with your app name_

```bash
$ docker push registry.heroku.com/evening-shelf-95177/web
```

So now that you have pushed to the registry, you may run the app

### Once registry container is pushed to WEB

_replace `evening-shelf-95177` with your app name_

```bash
heroku open -a evening-shelf-95177
```

### Cool stuff

Now that you have your container in the registry, you can for example:

1. login to heroku on a raspberry pi
1. pull down and run the image :tada:
