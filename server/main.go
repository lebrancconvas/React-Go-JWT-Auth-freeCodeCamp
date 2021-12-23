package main  

import (
	"github.com/lebrancconvas/React-Go-JWT-Auth-freeCodeCamp/database"   
    "github.com/lebrancconvas/React-Go-JWT-Auth-freeCodeCamp/routes" 
    "github.com/gofiber/fiber/v2" 
    "github.com/gofiber/fiber/v2/middleware/cors" 
)

func main() {
	database.Connect()  

    app := fiber.New()

    app.Use(cors.New(cors.Config{
        AllowCredentials: true, 
    }))  

    routes.Setup(app) 

    

    app.Listen(":3002") 
} 