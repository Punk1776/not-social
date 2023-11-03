# not-social


## Description

Not Social is a social platform where users can share their thoughts (formerly known as "posts"). Users can create and update their thoughts, react to others' thoughts, and connect with friends.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create and manage your post.
- Add reactions to post.
- Connect with friends by adding or removing them.
- View post and profiles of other users.
- Get a count of reactions on each post.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Other technologies your app uses

## Installation

1. Clone this repository to your local machine.

[Untitled_ Nov 3 2023 3_11 PM.webm](https://github.com/Punk1776/not-social/assets/135387049/7d2cdbe6-264f-4ec5-9212-c23a18afc4e0)



git clone https://github.com/yourusername/your-app-name.git

Install the required dependencies.

cd your-app-name
npm install
### Start the server.
npm start
Your app should now be running on http://localhost:3001.

## Usage
Use your favorite API testing tool (e.g., Postman or Insomnia) to interact with the API endpoints.
Register and log in to create, update, and react to thoughts.
Explore the API to see all available endpoints.

## API Endpoints

POST /api/users
GET /api/users
GET /api/users/:id
PUT /api/users/:id
DELETE /api/users/:id
POST /api/users/:userId/friends/:friendId
DELETE /api/users/:userId/friends/:friendId
GET /api/posts
GET /api/posts/:id
POST /api/posts
PUT /api/posts/:id
DELETE /api/posts/:id
POST /api/posts/:postId/reactions
DELETE /api/posts/:postId/reactions/:reactionId

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

