import React from "react";
import axios from "axios";

export default function Todo({ todo }) {
  return (
    <div>
      {todo &&
        todo.map((e, idx) => (
          <li key={idx}>
            {e.do}
            <br></br>
            <button
              onClick={() => {
                axios.delete("/api/delete", { data: { id: e.id, do: e.do } });
              }}
            >
              Delete
            </button>
          </li>
        ))}
    </div>
  );
}
