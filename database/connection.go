package database 
import (
	"gorm.io/gorm"
	"gorm.io/driver/mysql"  
)

func Connect() { 
		_, err := gorm.Open(mysql.Open("root@/reactgo-auth"), &gorm.Config{})  

		if err != nil {
			panic("Couldn't connect with the database.") 
		}
}