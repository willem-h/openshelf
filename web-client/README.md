# Openshelf

Keep track of books you've loaned out and discover the books you want to read
that your friends already have.

## Scratchpad

GET /users Lists all users
POST /users Creates a new user

GET /users/1 Returns user with ID 1
PATCH /users/1 Updates user with ID 1
DELETE /users/1 Deletes user with ID 1

I'm not sure how logging in works yet. Maybe that's another resource?

GET /books Lists all books
POST /books Creates a new book

GET /books/1 Returns book with ID 1.
PATCH /books/1 Updates book with ID 1.
DELETE /books/1 Deletes book with ID 1.

GET /users/1/owns List books that user with ID 1 owns
POST /users/1/owns Add another owned book to user with ID 1.

GET /users/1/owns/1 



/users/1/loans/1
/users/1/loans?borrower_id=2 Get a list of loans between user 1 and user 2.

/users/1/borrows/1
/users/1/borrows?loaner_id=2 Get a list of borrows between user 1 and user 2.


/users/1/wants/1
