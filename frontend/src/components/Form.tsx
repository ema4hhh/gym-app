import { useState, type FormEvent } from "react";
import clsx from 'clsx';
import { submitForm } from "../../utils/submitForm";

function Form() {
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)

    const {error, message, token} = await submitForm(event)

    if (token) {
      document.cookie = `token=${token}; expires=1h`
      // let currentUrlParams = new URLSearchParams(window.location.search)
      // currentUrlParams.set("token", token)
      // history.pushState(window.location.pathname + "?", currentUrlParams.toString())      
    }
    
    setError(error)
    setStatusMessage(message)
    setLoading(false)
  }

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
      <legend className={clsx({ "text-green-400": !error, "text-red-400": error })}>{statusMessage}</legend>
      <button type="submit">Submit</button>
    </form>
  )
}
export default Form;