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

#### Responses

**Curl**
```
curl --location --request GET 'http://localhost:3002/api/getNearbyTransitOptions/1'
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

<details>
<summary>POST: /api/getNearbyTransitOptions</summary>

#### Parameters

| Name | Type | Description                                                                                                                                    |
|------|------|------------------------------------------------------------------------------------------------------------------------------------------------|
| body | body | JSON-formatted object containing key/value pairs for the nearby transit option, the object must contain a unique value for the `_id` parameter |

#### Responses

**Curl**
```
curl --location --request POST 'http://localhost:3002/api/getNearbyTransitOptions' \
--header 'Content-Type: application/json' \
--data-raw '{
    "_id": 105,
    "nearbyTransitOptions": [
        {
            "name": "mustachio",
            "type": "bike path"
        },
        {
            "name": "denim",
            "type": "freeway"
        },
        {
            "name": "occupy",
            "type": "freeway"
        },
        {
            "name": "messenger",
            "type": "Metro"
        },
        {
            "name": "denim",
            "type": "Bus"
        },
        {
            "name": "succulents",
            "type": "freeway"
        },
        {
            "name": "yuccie",
            "type": "Metro"
        },
        {
            "name": "everyday",
            "type": "bike path"
        }
    ],
}
'
```

**200**
```
{
    "_id": 105,
    "nearbyTransitOptions": [
        {
            "_id": "60483bcd90423050a0d4b73c",
            "name": "mustachio",
            "type": "bike path"
        },
        {
            "_id": "60483bcd90423050a0d4b73d",
            "name": "denim",
            "type": "freeway"
        },
        {
            "_id": "60483bcd90423050a0d4b73e",
            "name": "occupy",
            "type": "freeway"
        },
        {
            "_id": "60483bcd90423050a0d4b73f",
            "name": "messenger",
            "type": "Metro"
        },
        {
            "_id": "60483bcd90423050a0d4b740",
            "name": "denim",
            "type": "Bus"
        },
        {
            "_id": "60483bcd90423050a0d4b741",
            "name": "succulents",
            "type": "freeway"
        },
        {
            "_id": "60483bcd90423050a0d4b742",
            "name": "yuccie",
            "type": "Metro"
        },
        {
            "_id": "60483bcd90423050a0d4b743",
            "name": "everyday",
            "type": "bike path"
        }
    ],
    "__v": 0
}
```
</details>

<details>
<summary>PUT: /api/getNearbyTransitOptions/{id}</summary>

#### Parameters

| Name | Type | Description                                                                                                                            |
|------|------|----------------------------------------------------------------------------------------------------------------------------------------|
| id   | path | id of the location                                                                                                                     |
| body | body | JSON-formatted object containing key/value pairs for the nearby transit option, the object must not contain a key/value pair for `_id` |

#### Responses

**Curl**
```
curl --location --request PUT 'http://localhost:3002/api/getNearbyTransitOptions/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "nearbyTransitOptions": [
        {
            "name": "mustachios",
            "type": "bike path"
        },
        {
            "name": "denim",
            "type": "freeway"
        },
        {
            "name": "occupy",
            "type": "freeway"
        },
        {
            "name": "messenger",
            "type": "Metro"
        },
        {
            "name": "denim",
            "type": "Bus"
        },
        {
            "name": "succulents",
            "type": "freeway"
        },
        {
            "name": "yuccie",
            "type": "Metro"
        },
        {
            "name": "everyday",
            "type": "bike path"
        }
    ]
}
'
```

**200**
```
{
    "_id": 1,
    "nearbyTransitOptions": [
        {
            "_id": "60483d773169b3511a7d0ff7",
            "name": "mustachios",
            "type": "bike path"
        },
        {
            "_id": "60483d773169b3511a7d0ff8",
            "name": "denim",
            "type": "freeway"
        },
        {
            "_id": "60483d773169b3511a7d0ff9",
            "name": "occupy",
            "type": "freeway"
        },
        {
            "_id": "60483d773169b3511a7d0ffa",
            "name": "messenger",
            "type": "Metro"
        },
        {
            "_id": "60483d773169b3511a7d0ffb",
            "name": "denim",
            "type": "Bus"
        },
        {
            "_id": "60483d773169b3511a7d0ffc",
            "name": "succulents",
            "type": "freeway"
        },
        {
            "_id": "60483d773169b3511a7d0ffd",
            "name": "yuccie",
            "type": "Metro"
        },
        {
            "_id": "60483d773169b3511a7d0ffe",
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
