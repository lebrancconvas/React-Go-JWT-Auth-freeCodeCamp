package models 

type User struct {
	ID uint 	
	Username string `gorm:"unique"`  
	Password []byte  
}