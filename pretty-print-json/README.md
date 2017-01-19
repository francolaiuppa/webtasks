# JSON Pretty Print Webtask
Pretty-prints a JSON given by  querystring parameter `url`.

# Requirements
Install and configure [wt-cli](https://webtask.io/cli).

# Setup for local development
Running the following will raise a development server at [localhost:8080](http://localhost:8080) .
```
wt serve index.js
```

# Setup for production
You have two ways to create/publish the webtask, first one is to use the Git URL which always uses latest version of this webtask.
```
wt create --name optional-name-for-your-webtask https://raw.githubusercontent.com/francolaiuppa/webtasks/master/pretty-print-json/index.js
```

Alternatively you can use a local file
```
wt create -name optional-name-for-your-webtask index.js
```

# Questions / Bugs?
Use the issue tracker, lets fix it together!.
