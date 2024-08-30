# Question-App

<p>This project is a question application built using React. The app consists of multiple-choice questions, a timer, and displays results upon completion. The app is structured to provide a smooth user experience, with dynamic elements that adapt to user actions.</p>

## Features
- Start Screen: Introduces the quiz and provides a button to start the test.
- Question Timer: A countdown timer is displayed for each question, with the ability to hide the options for the first few seconds.
- Question Navigation: Automatically navigates to the next question after an answer is selected or time runs out.
- Answer Feedback: Tracks and displays correct and incorrect answers.
- Final Results: Displays the number of correct, incorrect, and unanswered questions at the end of the quiz.

## Project Structure
.
├── public/
├── src/
│   ├── components/
│   │   ├── AppContext.jsx
│   │   ├── Answer.jsx
│   │   ├── FinishScreen.jsx
│   │   ├── Question.jsx
│   │   ├── QuestionCounter.jsx
│   │   ├── StartScreen.jsx
│   │   ├── Timer.jsx
│   ├── pictures/
│   ├── questions.js
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   └── styles.css
└── README.md

- components/: Contains all the reusable React components.
- questions.js: Contains the list of questions and their possible answers.
- styles.css: Global styles for the application.
- index.js: Entry point for React, rendering the app to the DOM.

## Installation
1. Clone the repository:
```
git clone https://github.com/ebruakcn/Question-App.git
```
2.Navigate to the project directory
```
cd quiz-app
```
3.Install dependencies:
```
npm install
```
4.Run the application:
```
npm run dev
```

## Usage
1. On the start screen, click the "Start" button to begin the quiz.
2. Answer the questions within the allotted time.
3. After answering all questions, the results screen will display your performance.
4. Review your correct and incorrect answers on the results screen.

## Live Demo
https://questionappp.netlify.app/
