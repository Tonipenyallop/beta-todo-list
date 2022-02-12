import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Todo from "./Todo";

function App() {
  const [todo, setTodo] = useState([]);

  const getReq = async () => {
    const data = await axios
      .get("/api/goodDay")
      .then((res) => setTodo(res.data));
  };

  useEffect(() => {
    getReq();
  }, [todo]);

  return (
    <div>
      <Form />
      <Todo todo={todo} />
    </div>
  );
}

export default App;
