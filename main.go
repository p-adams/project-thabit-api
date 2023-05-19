package main

import (
	"fmt"
	"net/http"
)

func rootHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "test")
}

func meowHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "meow")
}

func main() {
	
	http.HandleFunc("/", rootHandler)
    http.HandleFunc("/meow", meowHandler)

    fmt.Println("Server listening on port 8080...")
    http.ListenAndServe(":8080", nil)
}