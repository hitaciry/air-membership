import { combineReducers } from "redux";
import authReducer from "./authReducer";
import analyticsReducer from "./analyticsReducer";
import lcReducer from "./lcReducer";
import tasksReducer from "./tasksReducer";

import projectsReducer from "./projectsReducer";

import { firestoreReducer } from 'redux-firestore';
import opportunitiesReducer from "./opportunitiesReducer";

const rootReducer=combineReducers({
  auth: authReducer,
  analytics: analyticsReducer,
  lcs:lcReducer,
  tasks:tasksReducer,
  projects: projectsReducer,
  opportunities: opportunitiesReducer,
  firestore: firestoreReducer,
})
export  default rootReducer;