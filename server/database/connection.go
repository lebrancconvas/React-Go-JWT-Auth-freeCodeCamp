package database 
import (
	"github.com/lebrancconvas/React-Go-JWT-Auth-freeCodeCamp/models" 
	"gorm.io/gorm"
	"gorm.io/driver/mysql"  
)

var DB *gorm.DB 

func Connect() { 
		connection, err := gorm.Open(mysql.Open("root@/reactgo-auth"), &gorm.Config{})   

		if err != nil {
			panic("Couldn't connect with the database.") 
		}

		DB = connection 

		connection.AutoMigrate(&models.User{})  
}