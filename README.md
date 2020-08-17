# allbirds.com

> A service that display customer's reviews about the product
>

## Related Projects

  - https://github.com/teamSloanAllBirds/imageCarouselService
  - https://github.com/teamSloanAllBirds/ProductOptionsService

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This Review service is intended to be used with Image Carousel and Product Options services for a wholistic experience

## Requirements

- Node 12.16.3

## Development

From within the root directory:

### Installing Dependencies

```sh
npm install
```

### Seeding the Database

Please edit ./server/database/config.js before running

```sh
mysql -u YOUR_USERNAME_HERE < server/database/schema.sql
```

```sh
npm run seed
```

### Starting the server

Run webpack:

```sh
npm run build
```

Run the nodemon server:

```sh
npm run start
```



