import { useState, type FormEvent } from "react";
import axios from "axios";
import clsx from 'clsx';

function Form() {
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const username = formData.get('username')?.toString() || "new";
    const password = formData.get('password')?.toString() || "newer";

    await axios.post('http://localhost:1234/process-login', { 
      username, password 
    })
      .then(({ status }) => {
        if (status === 200) {
          console.log("no error");

          setError(false);
          setStatusMessage("Successfully logged in");
          window.location.href = "/app";
        }
      })
      .catch((error) => {
        setError(true);
        setStatusMessage(error.message);
      });
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" className="text-black" />
      </label>
      <label>
        Password:
        <input type="password" name="password" className="text-black" />
      </label>
      <legend dir="ltr" className={clsx({ "text-green-400": !error, "text-red-400": error })}>{statusMessage}</legend>
      <button type="submit">Submit</button>
    </form>
  )
}
export default Form;