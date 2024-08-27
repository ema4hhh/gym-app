import type { APIContext } from "astro";
import { defineMiddleware } from "astro:middleware";
import axios from "axios";

async function checkLogin(context: APIContext) {
    try {
        const token = context.cookies.get("token")?.value

        if(!token) {
            return false
        }

        const response = await axios.get("http://localhost:1234/auth-check", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(response.statusText === "OK") {            
            context.locals.user = response.data.user
                
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