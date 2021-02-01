# ChatbotArgo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Dependence Setup

Run `npm install`to setup the project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Questions Tutorial

For the chatbot works, you must register questions in the `\src\assets\questions.json` file. According to the model proposed in file `diagrama.jpeg`,
a question has an id, a question and a list of answers. The answer, has a text that represents the answer and an id to the next question that the answer 
will lead. If a question has no answers, it will be considered a end line in the flow.
