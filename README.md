# SwitchOn Assignment

## Requirement -

Build a to-do app with CRUD functionality as per the design guidelines.

## Deployed [here](https://todo-or-not-to-do.netlify.app/dashboard)

## Tech stack -

- React
- Sass
  - Sass provides a lot of powerful features and for this particular project,
    the nested selectors were very useful to keep classnames simple and for ease of styles.
- Ant-Design framework
  - The app had a lot of features that would have been time-consuming to implement from scratch,
    I had worked with Antd before and it has a robust amount of components with lots of functionality built in.
- React beautiful dnd
  - For the drag and drop features, wins over react-dnd for ease of use in both mobile and web.
- Redux
  - For global state management.
- Craco
  - For overriding create-react-app configs with custom themes for antd.

## Design pattern

Flux - use a centralized store that keeps track of global state and provides values for the rest of the components in a one-way data flow. Powered by redux.

## General Notes

- Emails can only be those found in the reqres api.
- User will always be the same, since the API does not support query by email.
- Tasks will be same across the users, as they are stored in localStorage, ideally these would be fetched by the backend on a per user basis so just emulating that here.

## Installation

- Run `npm install` to install all dependencies.
- Run `npm start` to start the dev server.
- Edit `craco.config.js` to change the default accent/color of the app or add more options.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
