# <div align="center">**Social-Network-API**</div>

## **TABLE OF CONTENTS**    
[1. TABLE OF CONTENTS](#TABLE-OF-CONTENTS)  
[2. LICENSE](#LICENSE)  
[3. PROJECT DESCRIPTION](#PROJECT-DESCRIPTION)  
[4. APPLICATION LINKS](#APPLICATION-LINKS)  
[5. CONTRIBUTIONS](#CONTRIBUTIONS)  
[6. DEVELOPMENT](#DEVELOPMENT)  
[7. INSTALLATION](#INSTALLATION)   
[8. USAGE](#USAGE)   
[9. TESTING](#TESTING)  
[10. USER STORY](#USER-STORY)  
[11. ACCEPTANCE CRITERIA](#ACCEPTANCE-CRITERIA)   
[12. GRADING REQUIREMENTS](#GRADING-REQUIREMENTS)    
[13. FUNCTIONALITY](#FUNCTIONALITY)  

---

## **LICENSE**  
![MIT](https://img.shields.io/badge/License-MIT-blue.svg)
> This application is covered under the [MIT License](https://opensource.org/licenses/MIT)    

---

## **PROJECT DESCRIPTION**
> The purpose of this challenge was to build an API for a social network web application. The application should allow users to share their thoughts, react to friends' thoughts, and create a friend list. Additionally, the challenge was to work with [Express.js](https://www.npmjs.com/package/express) for routing, [MongoDB](https://www.mongodb.com/) database, [Mongoose ODM](https://mongoosejs.com/) packages, and [Moment.js](https://momentjs.com/) to format time.

> The application will not be deployed but the project should include a walkthrough video demonstration of the API's functionality with [Insomnia](https://insomnia.rest/) .

---

## **APPLICATION LINKS**
> Live Application (Not relevant for this project)  
> [GitHub Repository](https://github.com/mhans19/social-network-api)  
> Walkthrough Demonstration: [Part 1](https://youtu.be/Gx8wNyqoYQw) [Part 2](https://youtu.be/O2oXUyELg4o)    

---

## **CONTRIBUTIONS**   
Please contact **MORGAN HANSEN** for all application inqueries.
| Email | GitHub | LinkedIn |  
| :------: | :------: |  :------: |  
| <mdhansen19@gmail.com> | [GitHub](https://github.com/mhans19?tab=repositories) |  [LinkedIn](https://www.linkedin.com/in/morgan-hansen-47235872/?challengeId=AQF6MR471a-pZgAAAXMTL5e4xLqg_LNW5yawcXgk_uUmLrzsXk5ehOnzlQuK2dOVeX4ARtJwxmcHQrQhtgL_jM96wbBzhLvmAA&submisksionId=813167e8-8027-1e16-5911-1c143c23561f) |    
  
---

## **DEVELOPMENT**  
This application was developed with the following application structures:  
1. [Node.js](https://nodejs.org/en/)  
2. [Node Package Manager (NPM)](https://www.npmjs.com/) 
    + [NPM Express](https://www.npmjs.com/package/express) 
    + [Moment.js](https://momentjs.com/)  
3. [MongoDB](https://www.mongodb.com/)
4. [Mongoose ODM](https://mongoosejs.com/)    
5. [Insomnia](https://insomnia.rest/)  

---

## **INSTALLATION**
> Prior to using the application, a user *must* complete the following:  
> 1. Download the [GitHub repository](https://github.com/mhans19/social-network-api) to a local repository. 
> 2. [Install dependencies](#DEVELOPMENT) such as Node.js and NPM packages.  
> 3. Ensure installation of a Command Line Interface (CLI) utility such as *Git Bash* or *Terminal*.

---

## **USAGE**
> The application must be operated with a Command Line Interface (CLI) software. Using the command line, navigate to the local repository containing the *server.js* file. Then, complete the following steps:    
> 1. Initiate the server (e.g., 'npm start')  
> 2. Open [Insomnia](https://insomnia.rest/) for testing localhost:3001/api/ API enpoints (i.e., **GET**, **POST**, **PUT**, and **DELETE** routes for **users**, **thoughts**, **friends** and **reactions**)  
> 
> Walkthrough Demonstration: [Part 1](https://youtu.be/Gx8wNyqoYQw) [Part 2](https://youtu.be/O2oXUyELg4o)    

---

## **TESTING**
> All API Routes were tested using [Insomnia](https://insomnia.rest/).  

---

## **USER STORY**  
> AS A social media startup  
> I WANT an API for my social network that uses a NoSQL database  
> SO THAT my website can handle large amounts of unstructured data   

---

## **ACCEPTANCE CRITERIA**
> GIVEN a social network API  
> WHEN I enter the command to invoke the application  
> THEN my server is started and the Mongoose models are synced to the MongoDB database  
> WHEN I open API GET routes in Insomnia Core for users and thoughts  
> THEN the data for each of these routes is displayed in a formatted JSON  
> WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  
> THEN I am able to successfully create, update, and delete users and thoughts in my database  
> WHEN I test API POST and DELETE routes in Insomnia Core  
> THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list  
  
---

## **GRADING REQUIREMENTS**
#### <div align="center">This Challenge is graded based on the following criteria:</div>
### **<div align="center">Deliverables: 10%</div>**
- [x] Your GitHub repository containing your application code.

### **<div align="center">Walkthrough Video: 37%</div>**
- [x] A walkthrough video that demonstrates the functionality of the social media api must be submitted, and a link to the video should be included in your README file.
- [x] The walkthrough video must show all of the technical acceptance criteria being met.
- [x] The walkthrough video must demonstrate how to start the application’s server.
- [x] The walkthrough video must demonstrate GET routes for all users and all thoughts being tested in Insomnia Core.
- [x] The walkthrough video must demonstrate GET routes for a single user and a single thought being tested in Insomnia Core.
- [x] The walkthrough video must demonstrate POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia Core.
- [x] Walkthrough video must demonstrate POST and DELETE routes for a user’s friend list being tested in Insomnia Core.
- [x] Walkthrough video must demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia Core.

### **<div align="center">Technical Acceptance Criteria: 40%</div>**
#### **Satisfies all of the preceding acceptance criteria plus the following:**
- [x] Uses the [Moment.js](https://momentjs.com/) packages to format time.
- [x] Uses the [Mongoose package](https://mongoosejs.com/) to connect to a MongoDB database.
- [x] Includes User and Thought models outlined in the Challenge instructions.
- [x] Includes schema settings for User and Thought models as outlined in the Challenge instructions.
- [x] Includes Reactions as the reaction field's subdocument schema in the Thought model.

### **<div align="center">Repository Quality: 13%</div>**
- [x] Repository has a unique name.
- [x] Repository follows best practices for file structure and naming conventions.
- [x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [x] Repository contains multiple descriptive commit messages.
- [x] Repository contains a high-quality README with description and a link to a walkthrough video.

---

## **FUNCTIONALITY**  
1. From the command line interface (CLI), navigate to the local repository containing the *server.js* file.   
![](/assets/images/localRepo.PNG)   
2. Initiate the server by typing 'npm start' in the command-line.   
![](/assets/images/startServer.PNG)   
3. Using Insomnia, test the API endpoints for localhost:3001/api/{endpoint}.   
    + **USER Routes**:   
        **GET All Users** localhost:3001/api/users  
        **GET Single User** localhost:3001/api/users/:id  
        **POST New User** localhost:3001/api/users   
        **PUT Single User** localhost:3001/api/users/:id  
        **DELETE Single User** localhost:3001/api/users/:id    
    + **THOUGHT Routes**:   
        **GET All Thoughts** localhost:3001/api/thoughts  
        **GET Single Thought** localhost:3001/api/thoughts/:id  
        **POST New Thought** localhost:3001/api/thoughts/:userId  
        **PUT Single Thought** localhost:3001/api/thoughts/:userId  
        **DELETE** localhost:3001/api/thoughts/:userId     
    + **FRIEND Routes**:   
        **POST New Friend** localhost:3001/api/users/:id/friends/friendId   
        **DELETE** localhost:3001/api/users/:id/friends/friendId   
    + **REACTION Routes**:    
        **POST New Reaction**: localhost:3001/api/thoughts/:thoughtId/reactions    
        **DELETE Single Reaction**: localhost:3001/api/thoughts/:thoughtId/reactionId    
    
![](/assets/images/insomnia.PNG) 