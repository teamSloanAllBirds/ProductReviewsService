# Product Reviews (allbirds.com)
##### A replication of the product reviews service on allbirds' individual House Page

> A service that display customer's reviews about the product
> ![Image of Service Module] (https://fec-allbirds.s3-us-west-1.amazonaws.com/FEC+-+ProductReviewService.png)

## Related Projects
  - https://github.com/teamSloanAllBirds/ProductTopNavigationService
  - https://github.com/teamSloanAllBirds/imageCarouselService
  - https://github.com/teamSloanAllBirds/ProductOptionsService
  - https://github.com/teamSloanAllBirds/midPageImagesService
  - https://github.com/teamSloanAllBirds/ProductFooterService

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [React Component Breakdown](#React-Component-Breakdown)


## Usage

> This Review service is intended to be used with other services for a wholistic experience

## Requirements

- Node 12.16.3

## Development

From within the root directory:

### Installing Dependencies

```sh
npm install
```

### Seeding the Database

In "/server/database" repo, create "config.js" with the following line:

```sh
module.exports = {user: 'FILL_ME', password: 'FILL_ME', database: 'FILL_ME', multipleStatements: true};
```

Run seeding scripts:

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

# React Component Breakdown

## App Component
### Child React Components
- Overview
- ReviewList

### State
- reviews - array of all the customers' reviews
- visible - number of reviews being displayed

### Methods
- componentDidMount()
  - Invoked when component mounts
  - Fetches reviews for product ID 1

- handleFetchReviews()
  - Takes the pathname from the window and sends a GET request to the server with a provided ID

- handleLoadMore()
  - Load more product reviews

## Overview Component
### Child React Components
- BigRatingStar

### Overview
- Stateless component that renders overview rating

## ReviewList Component
### Child React Components
- SmallRatingStar

### Overview
- Stateless component that dynamically renders reviews about the product from the parent state

## SmallRatingStar Component
### Overview
- Stateless component that renders small rating stars

## BigRatingStar Component
### Overview
- Stateless component that renders big and half rating stars