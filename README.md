### Books Assignment

Admin panel to CRUD books and ancillary entities

### Entities

Book - Author - User - Log

### Business Rules
* Form validation on all forms
* All form input to be sanitised proper to insertion into the database
* Authentication checks on all privileged functions
* When adding/editing a book, one needs a list of authors in a picklist
* Update/delete needs to be an option in show authors & books

### User Interface/Routes (Views)

#### Anonymous
TABLE GET     all books listing
FORM POST     login 
Access to the following pages only after login

#### Authenticated
FORM PUT      Add new books form
FORM PATCH    Updating existing books page
BUTTON DELETE Deleting books interface
TABLE GET     all authors listing
FORM PUT      Add new authors form
FORM PATCH    Updating authors page
BUTTON DELETE Deleting authors interface
FORM PUT      Creating users accounts
FORM PATCH    Update users
BUTTON DELETE delete users

### API Endpoint

#### Anonymous
app.post('/api/login')                        login 
app.get('/api/allbooks')        TABLE GET     all books listing
Access to the following pages only after login

#### Authenticated
app.put('/api/addbook')         FORM PUT      Add new books form
app.patch('/api/updatebook')    FORM PATCH    Updating existing books page
app.delete('/api/deletebook')   BUTTON DELETE Deleting books interface
app.get('/api/allauthors')      TABLE GET     all authors listing
app.put('/api/addauthor')       FORM PUT      Add new authors form
app.patch('/api/updateauthor')  FORM PATCH    Updating authors page
app.delete('/api/deleteauthor') BUTTON DELETE Deleting authors interface
app.put('/api/adduser')         FORM PUT      Creating users accounts
app.patch('/api/updateuser')    FORM PATCH    Update users
app.delete('/api/deleteuser')   BUTTON DELETE delete users

Form validation on all forms

### SQL FUNCTIONS

books - bookID(PK), bookTitle, originalTitle, yearOfPublication, genre,
millionsSold, languageWritten, AuthorID (FK), coverImagePath 
authors - authorID(PK), Name, Surname, Nationality, BirthYear, DeathYear
users - userID, firstName, lastName, email, dateOfBirth, username, password
log - logID, method, url, userid, timestamp

### Startup Instructions

Install NPM dependencies
Import database from sql/schema.sql into database 'books'
Run Node Server

```
npm install
mysql -u root -p books < sql/schema.sql
node server.js
```

### TODO
* Create two new tables of log, user
* css
* server.js endpoints for each action for my forms
* 