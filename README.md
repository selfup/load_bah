# Load Bah

A place for your team to make get requests (easy in curl) to update load bars!

### Starting the application

`npm start`

You can set the port: `$PORT=8888 npm start`

Or it just defaults to `8080`

**GET**

With ENV vars:

```bash
curl -s "<machine_host_ip>:$PORT/script_name/current_progress/total_progress"
```

Without env vars:

```bash
curl -s localhost:8080/script_name/current_progress/total_progress
```

_You can use `-v` if you want verbose output, but typically you want very little output via `-s`_

**NOW**

You view the output via: `<machine_host_ip>:$PORT/`

_the source code is quite small, I am sure you can figure out the rest_ :smile:

### Private (LAN) network

Discover the machine IP:

`ifconfig | grep '10.'`

or

`ifconfig | grep '192.'`

or

`ifconfig | grep '172.'`

Should be `eth0` on ethernet or otherwise on `WLAN`

***

That's it! :tada:
