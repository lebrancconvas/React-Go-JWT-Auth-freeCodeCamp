package database 
import (
	"github.com/lebrancconvas/React-Go-JWT-Auth-freeCodeCamp/models" 
	"gorm.io/gorm"
	"gorm.io/driver/mysql"  
)

func Connect() { 
		connection, err := gorm.Open(mysql.Open("root@/reactgo-auth"), &gorm.Config{})   

		if err != nil {
			panic("Couldn't connect with the database.") 
		}

		connection.AutoMigrate(&models.User{})  
}