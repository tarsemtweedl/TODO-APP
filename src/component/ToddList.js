import React, { useContext } from "react";
import Store from "../context";

export default function TodoList() {
  const { state, dispatch } = useContext(Store);
  console.log('this is complete state', state.complete)
  return (
    <div className="row">
      <button onClick={() => dispatch({ type: "REFRESH" })} >Refersh</button>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {state.todos.map(t => (
                <li key={t} className="list-group-item" onClick={() => dispatch({ type: "COMPLETE", payload: t })}>
                  {t}
                </li>
              ))}
            </ul>
            <br/>
            <h1>completed List</h1>
            <ul className="list-group">
              {state.complete.map(t => (
                <li key={t} className="list-group-item" style={{backgroundColor: 'green'}}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
