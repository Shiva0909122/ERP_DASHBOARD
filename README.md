
### 1. **Initialize a Git Repository (if not already initialized)**
   - Open a terminal in your project folder and run:
     ```bash
     git init
     ```

### 2. **Create a `.gitignore` file**
   - Inside your project folder, create a file named `.gitignore` if it’s not already there. This will prevent unnecessary files from being uploaded (e.g., `node_modules`).
   - Add these lines to `.gitignore`:
     ```
     node_modules
     .env
     .DS_Store
     ```
   
### 3. **Stage and Commit Changes**
   - Stage all files to be added to Git:
     ```bash
     git add .
     ```
   - Commit the files with a descriptive message:
     ```bash
     git commit -m "Initial commit"
     ```

### 4. **Create a Repository on GitHub**
   - Go to [GitHub](https://github.com) and log in.
   - Click on the **New** button (usually found under "Repositories").
   - Name your repository, add a description if you like, and set it to **Public** or **Private**.
   - Click on **Create repository**.

### 5. **Link the Local Repository to GitHub**
   - After creating the repository on GitHub, GitHub will provide a URL for the repository.
   - In your terminal, add this remote URL to your local repository:
     ```bash
git remote add origin https://github.com/Shiva0909122/ERP_DASHBOARD.git
     ```

### 6. **Push Your Project to GitHub**
   - Push your local commits to GitHub:
     ```bash
     git push -u origin main
     ```
   - If you’re using `master` instead of `main`, use this command instead:
     ```bash
     git push -u origin master
     ```

### 7. **Verify on GitHub**
   - Go to your GitHub repository page to confirm that all files are uploaded.

### Quick Summary of Commands:
```bash
git init
echo "node_modules" >> .gitignore
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Shiva0909122/ERP_DASHBOARD.git
git push -u origin main
```
 ### To run the Project
 1. Open the new terminal run the below lines
PS D:\ELC-Capstone>cd MERNERP
PS D:\ELC-Capstone\MERNERP> cd backend
PS D:\ELC-Capstone\MERNERP\backend>npm install
PS D:\ELC-Capstone\MERNERP\backend>npm start

2. Open the new terminal run the below lines
PS D:\ELC-Capstone>cd MERNERP
PS D:\ELC-Capstone\MERNERP> cd frontend
PS D:\ELC-Capstone\MERNERP\frontend>npm install
PS D:\ELC-Capstone\MERNERP\frontend>npm start

3.You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.108:3000

### Frontend View of the Project

![image](https://github.com/user-attachments/assets/03e1e965-ebbc-40b9-baf7-b2fc18ff17d3)

### Login Page
![image](https://github.com/user-attachments/assets/8634af10-9de2-4a87-8988-52defbf5186f)

### Admin Login
![image](https://github.com/user-attachments/assets/22073f03-c8f4-4c80-896a-0910a7464456)

### Student Login
![image](https://github.com/user-attachments/assets/7af89e29-d3db-41c7-9086-0ea7705a3ae3)

### Teacher Login
![image](https://github.com/user-attachments/assets/3b103146-dabf-4ac9-926f-caada89111c4)

### Admin Dashboard
![image](https://github.com/user-attachments/assets/478aaabb-b350-4442-9fa6-69864cc8b641)

### Student Dashboard
![image](https://github.com/user-attachments/assets/092bd21b-37b4-4d45-bcea-2a75e2e33ac1)

### Teacher Dashboard
![image](https://github.com/user-attachments/assets/5648de10-ab96-4161-858a-d5271ef493cb)


Your React project is now successfully uploaded to GitHub!
Happy Coding !
