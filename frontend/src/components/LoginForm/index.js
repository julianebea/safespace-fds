import React from "react";
import { useState, useEffect } from "react";

function LoginForm({ onSubmit }) {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await onSubmit({
      useremail,
      password,
    });

    setUseremail("");
    setPassword("");
  }
}

return (
  <form onSubmit={}>
    <div className="data-input">
      <label htmlFor="useremail">Username</label>
      <input
        name="useremail"
        id="useremail"
        required
        value={useremail}
        onChange={(event) => setUseremail(event.target.value)}
      />
      <label htmlFor="password"></label>
      <input
        type="password"
        name="password"
        id="password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </div>
  </form>
);
