import { Middleware } from "@reduxjs/toolkit";

export const logger: Middleware = (store) => (next) => (action: any) => {
  const result = next(action);
  console.log("Action:", action.type);
  console.log("New State:", store.getState());
  return result;
};