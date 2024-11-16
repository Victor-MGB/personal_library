import csv
import requests

# API URL
API_URL = "http://localhost:4000/api/books"

# Function to load and add books to the API
def load_books_from_csv(file_path):
    with open(file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            book_data = {
                "title": row["title"],
                "author": row["author"],
                "genre": row["genre"],
                "publicationDate": row["publication_date"],
                "isbn": row["isbn"],
                "status": row["status"]
            }

            # POST request to add the book
            response = requests.post(API_URL, json=book_data)
            if response.status_code == 201:
                print(f"Successfully added book: {row['title']}")
            else:
                print(f"Failed to add book: {row['title']}. Error: {response.text}")

# Function to get all books
def get_all_books():
    response = requests.get(API_URL)
    if response.status_code == 200:
        books = response.json()
        for book in books:
            print(book)
    else:
        print(f"Failed to fetch books. Error: {response.text}")

# Function to update a book
def update_book(book_id, updated_data):
    response = requests.put(f"{API_URL}/{book_id}", json=updated_data)
    if response.status_code == 200:
        print(f"Successfully updated book with ID: {book_id}")
    else:
        print(f"Failed to update book with ID: {book_id}. Error: {response.text}")

# Function to delete a book
def delete_book(book_id):
    response = requests.delete(f"{API_URL}/{book_id}")
    if response.status_code == 200:
        print(f"Successfully deleted book with ID: {book_id}")
    else:
        print(f"Failed to delete book with ID: {book_id}. Error: {response.text}")

# Example usage of the functions
if __name__ == "__main__":
    # Load books from CSV
    load_books_from_csv("books.csv")
    
    # Get all books
    print("\nFetching all books:")
    get_all_books()
    
    # Update a book (replace 'book_id_here' with an actual book ID)
    book_id = "67355ccf330ce4cab4e711f0"
    updated_data = {
        "status": "Checked Out"
    }
    update_book(book_id, updated_data)

    # Delete a book (replace 'book_id_here' with an actual book ID)
    delete_book(book_id)
