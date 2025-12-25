# Todo App - Full Stack

A modern, full-stack Todo application built with React, NestJS, and MongoDB. Perfect for beginners learning full-stack development!

## 🚀 Features

- ✅ Add new todos
- 📝 Edit todo titles inline
- ✅ Mark todos as completed/uncompleted
- 🗑️ Delete todos
- 💾 Persistent storage with MongoDB
- 📱 Responsive design
- 🎨 Clean, modern UI with card-based layout

## 🛠️ Tech Stack

### Frontend
- **React** (with Hooks)
- **Axios** for API calls
- **CSS** for styling

### Backend
- **NestJS** (Node.js framework)
- **MongoDB** with Mongoose
- **TypeScript**

### Database
- **MongoDB** (NoSQL database)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (Community Server) - [Download here](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** (comes with Node.js)

## 🏗️ Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <your-repo-url>
   cd "To-Do List"
   ```

2. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```

## 🚀 Running the Application

### Step 1: Start MongoDB
Make sure MongoDB is running on your system:

**Windows (Command Prompt as Administrator):**
```bash
net start MongoDB
```

**Or use MongoDB Compass:**
- Open MongoDB Compass
- Connect to `mongodb://localhost:27017`

### Step 2: Start the Backend
```bash
cd backend
npm run start:dev
```
The backend will run on `http://localhost:3001`

### Step 3: Start the Frontend
Open a new terminal and run:
```bash
cd frontend
npm start
```
The frontend will run on `http://localhost:3000`

### Step 4: Access the App
Open your browser and go to `http://localhost:3000`

## 📡 API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/todos` | Get all todos |
| POST | `/todos` | Create a new todo |
| PATCH | `/todos/:id` | Toggle todo completion status |
| PUT | `/todos/:id` | Update todo title |
| DELETE | `/todos/:id` | Delete a todo |

### Sample API Response
```json
[
  {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "title": "Buy groceries",
    "completed": false,
    "createdAt": "2023-09-01T10:00:00.000Z"
  }
]
```

## 📁 Project Structure

```
To-Do List/
├── backend/                 # NestJS backend
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   ├── todo/
│   │   │   ├── dto/
│   │   │   │   ├── create-todo.dto.ts
│   │   │   │   ├── update-todo.dto.ts
│   │   │   │   └── update-title.dto.ts
│   │   │   ├── todo.controller.ts
│   │   │   ├── todo.module.ts
│   │   │   ├── todo.schema.ts
│   │   │   └── todo.service.ts
│   ├── .env
│   ├── package.json
│   └── ...
├── frontend/                # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── TodoForm.jsx
│   │   ├── TodoList.jsx
│   │   ├── TodoItem.jsx
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── ...
└── README.md
```

## 🎯 How to Use

1. **Add a Todo**: Type in the input field and click "Add"
2. **Mark as Done**: Click the "Mark as Done" button or click on the todo text
3. **Edit a Todo**: Click the "Edit" button, modify the text, then click "Save"
4. **Delete a Todo**: Click the "Delete" button

## 🔧 Configuration

### Backend Configuration
The backend uses environment variables. Check `backend/.env`:

```
MONGODB_URI=mongodb://localhost:27017/todoapp
```

### Frontend Configuration
The frontend connects to the backend at `http://localhost:3001`. You can change this in `frontend/src/App.jsx` if needed.

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm run test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 🚀 Building for Production

### Backend
```bash
cd backend
npm run build
npm run start:prod
```

### Frontend
```bash
cd frontend
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) - The backend framework
- [React](https://reactjs.org/) - The frontend library
- [MongoDB](https://www.mongodb.com/) - The database
- [Create React App](https://create-react-app.dev/) - React app boilerplate

## 📞 Support

If you have any questions or issues, feel free to open an issue in this repository.

---

**Happy coding! 🎉**
