package main

import (
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
	"gorm.io/driver/mysql" 
)

func main() {
		_, err := gorm.Open(mysql.Open("root@/reactgo-auth"), &gorm.Config{})  

		if err != nil {
			panic("Couldn't connect with the database.") 
		}
    app := fiber.New()

    app.Get("/", func(c *fiber.Ctx) error {
        return c.SendString("Hello, World 👋!")
    })

    app.Listen(":3000")
} 