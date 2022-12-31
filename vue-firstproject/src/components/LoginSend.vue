<script>
import router from "../router/index"    
import axios from "axios"    
export default {    
    name: "Login",    
    methods: {    
        login: (e) => {
            e.preventDefault()    
            let username = "username"   
            let password = "password"    
            let login = () => {    
                let data = {    
                    username: username,    
                    password: password  
                }  
            
                console.log("loginFunction")
                axios.post("/api/login", data)
                .then((response) => {    
                    console.log("Logged in")
                    router.push("/dashboard")    
                })    
                .catch((errors) => {    
                    console.log("Cannot log in")    
                })    
            }
            login()
               
        }
    }
}
</script>

<template>
    <div>
    <form v-on:submit="login">
        Username: <input type="text" name="username">
        Password: <input type="text" name="password">
        <input type="submit" value="Login">
    </form>
    </div>
</template>