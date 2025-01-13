**Title**: How to Set Up an ERP Dashboard with Role-Based Access Control in React and Node.js

**Description**:

In this tutorial, I'll guide you through the setup of an ERP Dashboard with Role-Based Access Control. This project includes separate dashboards for Admin, Student, and Teacher roles, each with tailored features and permissions. You’ll learn how to initialize a Git repository, push it to GitHub, and set up both backend and frontend for a seamless development experience.

**Table of Contents:**
1. [Project Setup in Git](#project-setup-in-git)
2. [Backend Setup](#backend-setup)
3. [Frontend Setup](#frontend-setup)
4. [Project Demo](#project-demo)
5. [GitHub Repository](#github-repository)
6. [Run the Project](#run-the-project)

---

### 📂 **Project Setup in Git**
1. **Initialize Git Repository**  
   Open a terminal in your project folder and run:
   ```bash
   git init
   ```

2. **Create a `.gitignore` file**  
   Inside your project folder, create a file named `.gitignore` and add the following to ignore unnecessary files:
   ```plaintext
   node_modules
   .env
   .DS_Store
   ```

3. **Stage and Commit Changes**  
   Stage all files and commit:
   ```bash
   git add .
   git commit -m "Initial commit"
   ```

4. **Push to GitHub**  
   - Create a repository on [GitHub](https://github.com).
   - Link your local repository to GitHub:
     ```bash
     git remote add origin https://github.com/Shiva0909122/ERP_DASHBOARD.git
     git push -u origin main
     ```

---

### ⚙️ **Backend Setup**

1. Open a new terminal:
   ```bash
   cd MERNERP/backend
   npm install
   npm start
   ```

### 🌐 **Frontend Setup**

1. Open another terminal:
   ```bash
   cd MERNERP/frontend
   npm install
   npm start
   ```

2. View your project at:
   - **Local**: http://localhost:3000
   - **Network**: http://192.168.0.108:3000

---

### 🔑 **Project Demo**
Check out the login and dashboards below:

1. **Login Page**
   ![image](https://github.com/user-attachments/assets/8634af10-9de2-4a87-8988-52defbf5186f)

2. **Admin Dashboard**
   ![image](https://github.com/user-attachments/assets/478aaabb-b350-4442-9fa6-69864cc8b641)

3. **Student Dashboard**
   ![image](https://github.com/user-attachments/assets/092bd21b-37b4-4d45-bcea-2a75e2e33ac1)

4. **Teacher Dashboard**
   ![image](https://github.com/user-attachments/assets/5648de10-ab96-4161-858a-d5271ef493cb)

---

**GitHub Repository**: [ERP Dashboard with Role-Based Access](https://github.com/Shiva0909122/ERP_DASHBOARD)

---

Thank you for watching! Please **like** 👍, **share**, and **subscribe** for more tutorials! 

Happy coding!
