import React from "react";
import axios from "axios";

export default function Form() {
  return (
    <div>
      <input id="input" type="text"></input>
      <button
        onClick={async () => {
          const input = document.getElementById("input");
          await axios.post("/api/add", { todo: input.value });
          input.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
}
