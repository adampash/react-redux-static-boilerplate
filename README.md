## Development

```bash
npm run start
```

Develop with hot-loading by navigating to:

[http://localhost:3000](http://localhost:3000)

Test the interactive in an iframe by navigating to (this is specific to Gawker Media sites):

[http://localhost:3000/test/](http://localhost:3000/test/)

## Deploy

```bash
bundle install # if haven't already done this
npm run deploy
```

This will bundle your app, deploy to S3, and invalidate your Cloudfront cache.

