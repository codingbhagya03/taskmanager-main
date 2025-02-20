# Creating a MongoDB Database for Your Task Manager Application

Here are the step-by-step instructions to create a MongoDB database that works with your task manager application:

## 1. Install MongoDB (if not already installed)

### For Local Installation:
- **Windows**: Download and install from the [MongoDB website](https://www.mongodb.com/try/download/community)
- **Mac**: Use Homebrew: `brew install mongodb-community`
- **Linux**: `sudo apt install mongodb` (Ubuntu/Debian) or appropriate package manager

### Or Use MongoDB Atlas (Cloud):
1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (the free tier works fine)

## 2. Configure Your Database

### If Using Local MongoDB:
1. Start MongoDB service:
   ```
   sudo systemctl start mongodb  # Linux
   brew services start mongodb-community  # Mac
   # Windows: MongoDB runs as a service
   ```

2. Access MongoDB shell:
   ```
   mongosh
   ```

3. Create a new database:
   ```
   use taskmanager
   ```

4. Create a user for authentication:
   ```
   db.createUser({
     user: "taskuser",
     pwd: "password123",  // Use a strong password!
     roles: [{ role: "readWrite", db: "taskmanager" }]
   })
   ```

### If Using MongoDB Atlas:
1. Create a new database:
   - Click "Browse Collections" → "Add My Own Data"
   - Enter "taskmanager" as Database name
   - Enter "tasks" as Collection name
   - Click "Create"

2. Set up database access:
   - Go to Security → Database Access
   - Add a new database user with readWrite permissions

3. Allow network access:
   - Go to Security → Network Access
   - Add your IP address or allow access from anywhere for development

## 3. Configure Your Application

1. Create a `.env` file in your project root:
   ```
   # For local MongoDB
   AUTH_URL=http://localhost:5000/api/auth
   MONGODB_URI=mongodb://taskuser:password123@localhost:27017/taskmanager
   
   # For MongoDB Atlas
   # AUTH_URL=http://localhost:5000/api/auth
   # MONGODB_URI=mongodb+srv://taskuser:password123@cluster0.mongodb.net/taskmanager
   ```

2. Update your `authApiSlice.js` file (line 9):
   ```javascript
   // Near the top of the file
   const AUTH_URL = process.env.AUTH_URL || 'http://localhost:5000/api/auth';
   
   // Then in your API configuration
   export const authApiSlice = createApi({
     baseQuery: fetchBaseQuery({ baseUrl: AUTH_URL }),
     // rest of your code...
   });
   ```

3. Make sure your server code connects to MongoDB:
   ```javascript
   // In your server.js or database.js file
   const mongoose = require('mongoose');
   require('dotenv').config();

   mongoose.connect(process.env.MONGODB_URI)
     .then(() => console.log('Connected to MongoDB'))
     .catch(err => console.error('MongoDB connection error:', err));
   ```

## 4. Start Your Application

1. Start your backend server:
   ```
   npm run dev
   # or
   node server.js
   ```

2. In a separate terminal, start your frontend:
   ```
   npm start
   ```

## 5. Test Your Connection

Try logging in with a test user. If your database is properly configured, you should no longer see the `AUTH_URL is not defined` error.

If you encounter any other specific errors during this process, let me know, and I can help troubleshoot them!