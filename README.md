
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
![image](https://github.com/user-attachments/assets/03e1e965-ebbc-40b9-baf7-b2fc18ff17d3)

Your React project is now successfully uploaded to GitHub!
Happy Coding !
