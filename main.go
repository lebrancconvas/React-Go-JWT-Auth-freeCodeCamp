package main

import (
	"github.com/lebrancconvas/React-Go-JWT-Auth-freeCodeCamp/database"   
    "github.com/lebrancconvas/React-Go-JWT-Auth-freeCodeCamp/routes" 
    "github.com/gofiber/fiber/v2" 
)

func main() {
	database.Connect()  

    app := fiber.New()

    routes.Setup(app) 

    

    app.Listen(":3000")
} 