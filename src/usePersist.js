import { useEffect } from "react";

export function usePersistedContext(context, key = "state") {
  const persistedContext = localStorage.getItem(key);
  console.log('this is persistedContext', JSON.parse(persistedContext))
  return persistedContext ? JSON.parse(persistedContext) : context;
}

export function usePersistedReducer([state, dispatch], key = "state") {
  console.log('hello this is usePersistedReducer', JSON.stringify(state))
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
  return [state, dispatch];
}
