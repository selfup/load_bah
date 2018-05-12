# Load Bah

### Starting the application

`npm start`

You can set the port: `$PORT=8888 npm start`

Or it just defaults to `8080`

A place for your team to make get requests (easy in curl) to update load bars!

**GET**

With ENV vars:

```bash
curl -s "$HOST_NAME:$PORT/script_name/current_progress/total_progress"
```

Without env vars:

```bash
curl -s localhost:8080/script_name/current_progress/total_progress
```

_You can use `-v` if you want verbose output, but typically you want very little output via `-s`_

***

That's it! :tada:
