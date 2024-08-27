import type { FormEvent } from 'react';
import axios from 'axios';

export const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const formData = new FormData(form);
    const username = formData.get('username')?.toString() || "";
    const password = formData.get('password')?.toString() || "";

	let result = {error: true, message: "Nothing came out", token: ""}

    await axios.post('http://localhost:1234/login', {
      username, password 
    })
      .then((response) => {     
		const message = response.data.message

        console.log(response.data   );
        if (message === "Login successful") {
          const token = response.data.token;
          
          
          // window.location.href = "/app";
          return result = {error: false, message: message, token: token}
        }

		return result = {error: true, message: message, token: ""}
      })      
      .catch((error) => {
        console.log(error);
        
		return result = {error: false, message: error.message,   token: ""}
      });

	  return result
  };
