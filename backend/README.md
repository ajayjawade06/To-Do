# Todo App Backend

This is the NestJS backend for the Todo application.

## Features

- RESTful API for todo management
- MongoDB integration with Mongoose
- TypeScript support
- Input validation with class-validator
- CORS enabled

## API Endpoints

- `GET /todos` - Get all todos
- `POST /todos` - Create a new todo
- `PATCH /todos/:id` - Toggle completion status
- `PUT /todos/:id` - Update todo title
- `DELETE /todos/:id` - Delete a todo

## Setup

1. Install dependencies: `npm install`
2. Set up MongoDB connection in `.env`
3. Run in development: `npm run start:dev`

## Environment Variables

```
MONGODB_URI=mongodb://localhost:27017/todoapp
```

The backend runs on port 3001 by default.
