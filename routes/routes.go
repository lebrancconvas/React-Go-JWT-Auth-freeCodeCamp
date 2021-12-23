package routes 

import (
	"github.com/lebrancconvas/React-Go-JWT-Auth-freeCodeCamp/controllers" 
	"github.com/gofiber/fiber/v2" 
)

func Setup(app *fiber.App) { 
	app.Get("/", controllers.Hello) 
}