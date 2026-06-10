# ECE-Homepage
Homepage site for ECE written in Next to replace brightspot


# Setup instructions:
Please follow the instructions in order for first-time setup.
### 1. Setting up the dev environment:
Start by cloning the repository on your machine using 
```
git clone https://github.com/BYU-ECE-Software/ECE-Homepage.git
```
Then create and switch to a new branch:
```
git checkout -b <firstnamelastname/description>
```

### 2. Install necessary packages
Web dev uses the npm package manager. Dependencies for this project are defined in the package.json file. To install them, run 
```
npm -i
```
This will install all the packages into the node_modules folder (which is git-ignored). This means that it's not necessary to make a environment (as when working in python), because all the dependencies are contained within the project folder.

### 3. Host the website locally
To view the website on your local machine, run 
```
npm run dev
```

### 4. 