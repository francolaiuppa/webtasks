# IATACodes Nearby API
Find nearest airports by latitude/longitude.
It also filters down to Airports with the word 'airport' on them.

# API Docs
The API Docs are available at [iatacodes.org](http://iatacodes.org/#docs).

# Requirements
Install and configure [wt-cli](https://webtask.io/cli).

# Setup for local development
Running the following will raise a development server at [localhost:8080](http://localhost:8080) .
```
wt serve -s API_KEY=YOUR_API_KEY_GOES_HERE index.js
```

# Setup for production
You have two ways to create/publish the webtask, first one is to use the Git URL which always uses latest version of this webtask.

```
wt create -s API_KEY=YOUR_API_KEY_GOES_HERE --name optional-name-for-your-webtask https://raw.githubusercontent.com/francolaiuppa/webtasks/master/iatacodes-nearby-api/index.js
```

Alternatively you can use a local file
```
wt create -s API_KEY=YOUR_API_KEY_GOES_HERE --name optional-name-for-your-webtask index.js
```

# Questions / Bugs?
Use the issue tracker, lets fix it together!.
