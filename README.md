# hapi-pagination-example

An example hapi project using Glue, Node-Config, Hapi-Pagination, and Good Logs

## Installation
```
git clone https://github.com/ambrons/hapi-pagination-example.git
```

## Run

This example uses 2 connections for the purpose of making sure the hapi-pagination works on both.
Modify the `config/default.yml` to change the ports.  Default ports are `[3000, 3001]`.

```
npm start
```

## Client Connect

**Default get request**
```
curl http://localhost:3000/base/example
```
```
{"meta":{"count":3,"pageCount":1,"totalCount":3,"next":null,"previous":null,"self":"/base/objects?page=1&limit=25","first":"/base/objects?page=1&limit=25","last":"/base/objects?page=1&limit=25"},"results":[{"name":"one"},{"name":"two"},{"name":"three"}]}
```

For readability would recommend installing `json` via `npm i -g json`.
Then you can use the following modification:

```
curl -s http://localhost:3000/base/objects|json -2
```
```
{
  "meta": {
    "count": 3,
    "pageCount": 1,
    "totalCount": 3,
    "next": null,
    "previous": null,
    "self": "/base/objects?page=1&limit=25",
    "first": "/base/objects?page=1&limit=25",
    "last": "/base/objects?page=1&limit=25"
  },
  "results": [
    {
      "name": "one"
    },
    {
      "name": "two"
    },
    {
      "name": "three"
    }
  ]
}
```

You can also provide query parameters which will effect the data in meta:
```
curl -s http://localhost:3000/base/objects?limit=1|json -2
```
```
{
  "meta": {
    "count": 3,
    "pageCount": 3,
    "totalCount": 3,
    "next": "/base/objects?limit=1&page=2",
    "previous": null,
    "self": "/base/objects?limit=1&page=1",
    "first": "/base/objects?limit=1&page=1",
    "last": "/base/objects?limit=1&page=3"
  },
  "results": [
    {
      "name": "one"
    },
    {
      "name": "two"
    },
    {
      "name": "three"
    }
  ]
}
```
