# Location Service

> This service provides a map of the location and nearby services.

## Related Projects

 - https://github.com/sdc-perlman/review-service
 - https://github.com/sdc-perlman/photos-service
 - https://github.com/sdc-perlman/nearby-workspaces

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

### CRUD API

<details>
<summary><strong>getNearbyTransitOptions</strong></summary>

<blockquote>
<details>
<summary>GET: /api/getNearbyTransitOptions/{id}</summary>

#### Parameters

| Name | Type | Description        |
|------|------|--------------------|
| id   | path | id of the location |

#### Response

**Curl**
```
curl -X GET 'http://localhost:3002/api/getNearbyTransitOptions/1'
```

**200**
```
{
    "_id": 1,
    "nearbyTransitOptions": [
        {
            "_id": "60482f6d126e1d4b9ce67931",
            "name": "mustaches",
            "type": "bike path"
        },
        {
            "_id": "60482f6d126e1d4b9ce67932",
            "name": "denim",
            "type": "freeway"
        },
        {
            "_id": "60482f6d126e1d4b9ce67933",
            "name": "occupy",
            "type": "freeway"
        },
        {
            "_id": "60482f6d126e1d4b9ce67934",
            "name": "messenger",
            "type": "Metro"
        },
        {
            "_id": "60482f6d126e1d4b9ce67935",
            "name": "denim",
            "type": "Bus"
        },
        {
            "_id": "60482f6d126e1d4b9ce67936",
            "name": "succulents",
            "type": "freeway"
        },
        {
            "_id": "60482f6d126e1d4b9ce67937",
            "name": "yuccie",
            "type": "Metro"
        },
        {
            "_id": "60482f6d126e1d4b9ce67938",
            "name": "everyday",
            "type": "bike path"
        }
    ],
    "__v": 0
}
```

</details>
</blockquote>
</details>

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- npm 6.14.7
- MongoDB 4.4.1

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
