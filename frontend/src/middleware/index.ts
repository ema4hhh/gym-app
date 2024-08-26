import type { APIContext } from "astro";
import { defineMiddleware } from "astro:middleware";
import axios from "axios";

async function checkLogin(context: APIContext) {
    try {
        const response = await axios.get("http://localhost:1234", {
            headers: {
                "Cookie": `connect.sid=${context.cookies.get("connect.sid")?.value}`
            }
        })
        if(response.statusText === "OK") {
            return true
        } 
        
        return false
    } catch(error) {
        console.error('Error verifying login state:', error);
        return false;
    }   
}

export const onRequest = defineMiddleware(async(context, next) => {
    const loginState = await checkLogin(context)

    if(loginState) {
        return next()
    }   

    return next(new Request("http://localhost:4321/login", {
        headers: {
          "x-redirect-to": context.url.pathname
        }
    }));    

    // return next()
});