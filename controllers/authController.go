package controllers 

import (
	"github.com/lebrancconvas/React-Go-JWT-Auth-freeCodeCamp/models" 
	"github.com/lebrancconvas/React-Go-JWT-Auth-freeCodeCamp/database" 
	"github.com/gofiber/fiber/v2" 
	"golang.org/x/crypto/bcrypt" 
	"github.com/dgrijalva/jwt-go" 
	"strconv" 
	"time" 
)

const SecretKey = "secret" 

func Register(c *fiber.Ctx) error {
	var data map[string]string  
	
	if err := c.BodyParser(&data); err != nil {
		return err 
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)  

	user := models.User{
		Username: data["username"],
		Password: password,   
	}  

	database.DB.Create(&user) 

	return c.JSON(user)  
} 

func Login(c *fiber.Ctx) error {
	var data map[string]string  
	
	if err := c.BodyParser(&data); err != nil {
		return err 
	} 

	var user models.User 

	database.DB.Where("username = ?", data["username"]).First(&user)  

	if user.ID == 0 {
		c.Status(fiber.StatusNotFound) 
		return c.JSON(fiber.Map{
			"message": "User not found.",  
		})
	}

	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"message": "Incorrect Password.",  
		})
	} 

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer: strconv.Itoa(int(user.ID)),
		ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),    
	})  

	token, err := claims.SignedString([]byte(SecretKey))  

	if err != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "Could not login.",  
		}) 
	}

	cookie := fiber.Cookie{
		Name: "jwt",
		Value: token,
		Expires: time.Now().Add(time.Hour * 24), 
		HTTPOnly: true, 
	}

	c.Cookie(&cookie)  

	return c.JSON(fiber.Map{
		"message": "Login Success", 
	})  
}