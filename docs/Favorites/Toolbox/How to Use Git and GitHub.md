# How to Use Git and GitHub
Git is a version control system that allows you to track changes to your code over time. GitHub is a web-based platform that allows you to store your Git repositories online and collaborate with others. Here's how to get started:

## Step 1: Install Git
First, you need to install Git on your computer. You can download the latest version of Git from the official website: https://git-scm.com/downloads

## Step 2: Set Up Your Git Configuration
Once you have Git installed, you need to configure it with your name and email address. Open up a terminal or command prompt and run the following commands:
```shell
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```
Users in mainland China may experience difficulty accessing GitHub due to the country's internet censorship policies. To set up a proxy server, run the following command, replacing `127.0.0.1` and `7890` with the hostname and port number of the proxy server:
```shell
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
```
By default, Git uses the system's default editor (usually Vim or Nano) for commit messages and other text input. If you prefer a different editor, you can set it up with the following command, replacing nano with your preferred editor:
```shell
git config --global core.editor nano
```
To view your current Git configuration, including all of the settings you've set up so far, run the following command:
```shell
git config --list
```

## Step 3: Create a New Repository

GitHub is a popular platform for hosting and collaborating on code repositories. Creating a new repository on GitHub is a simple process that can be done in just a few steps. Once you have created a new repository on GitHub, you can connect it to your local Git repository using one of two methods.
### Creating a New Repository on GitHub
To create a new repository on GitHub, follow these steps:
1. Go to https://github.com and sign in to your account (or create a new account if needed).
2. Click on the "+" button in the top-right corner and select "New repository".
3. Provide a name for your repository, choose any desired settings (e.g., public or private), and click "Create repository".

### Method 1: Creating a New Local Repository and Connecting to GitHub
1. If you have not yet created a local Git repository, you can create one and connect it to your GitHub repository using the following steps:
Navigate to the directory where you want to store your code and run the following command:
```shell
git init
```
2. To connect your local Git repository to your GitHub repository, you need to add a remote. Run the following command, replacing `username` with your GitHub username and `repository` with the name of your repository:
```shell
git remote add origin https://github.com/username/repository.git
```

### Method 2: Cloning an Repository from GitHub
If you already have a GitHub repository and want to clone it to your local machine, follow these steps:
1. On the repository page on GitHub, click on the green "Code" button. Copy the URL provided (e.g., `https://github.com/username/repository.git`).
2. Open a terminal or command prompt on your local machine and navigate to the directory where you want to clone the repository.
3. Run the following command, replacing the URL with the one you copied:
```shell
git clone https://github.com/username/repository.git
```

## Step 4: Add Files to Your Repository
To add files to your repository, use the git add command. For example, to add a file called `index.html`, run the following command:
```shell
git add index.html
```
To add all files within the current directory (including subdirectories), you can use the following command:
```shell
git add .
```
If you've added files for staging but later decide that you want to unstage them, you can use the `git reset` command. This effectively removes the files from the staging area, moving them back to the working directory.
```shell
git reset
```
After making changes and staging files, you might want to verify the status of your repository. The `git status` command provides you with information about which files are staged, unstaged, and untracked. It also gives you insights into the state of your working directory.
```shell
git status
```

## Step 5: Commit Your Changes
Once you've added your files, you need to commit your changes. This creates a snapshot of your code at that point in time. To commit your changes, run the following command:
```shell
git commit -m "Your commit message here"
```
Make sure to write a descriptive commit message that explains what changes you made.

If you don't provide the `-m` flag followed by a commit message, Git will open a text editor for you to write a more detailed message. This editor is typically configured as your default terminal text editor, such as Vim or Nano.

### Writing a Detailed Commit Message
When Git opens the text editor, you'll have the opportunity to write a more comprehensive commit message. Here's the general structure of a detailed commit message:
```vb
Short (50 chars or less) summary of changes

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. Explain the problem that this commit is solving.
Focus on why you made the changes, not just what changes you made.

Further paragraphs come after blank lines.

- Bullet points are okay, too

- Use a hyphen or asterisk followed by a space for each bullet
```
A good commit message follows these guidelines:
1. **Be Clear and Concise:** State the purpose of the commit in a succinct manner.
2. **Provide Context:** Briefly explain why the changes were necessary. Consider mentioning any issues, features, or bugs related to the commit.
3. **Use Present Tense:** Write the message in the present tense, as if describing the code's current state.
4. **Capitalization and Punctuation:** Write the first letter in uppercase and use punctuation properly for clarity.


## Step 6: Push Your Changes to GitHub
Finally, you can push your changes to GitHub by running the following command:
```shell
git push -u origin master
```
This will push your changes to the master branch of your GitHub repository.
Congratulations, you've now created a Git repository, committed changes, and pushed them to GitHub! This is just the beginning of what you can do with Git and GitHub, but it should be enough to get you started.
