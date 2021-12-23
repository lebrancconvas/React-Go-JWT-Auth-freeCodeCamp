package models 

type User struct {
	ID uint `json:"id"` 	
	Username string `json:"name" gorm:"unique"`   
	Password []byte  `json:"-"`
}