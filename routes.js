var studentsController = require('./controllers/studentsController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var booksController = require('./controllers/booksController');

exports.endpoints = [
	{
			method: 'GET',
		 	path: '/books',
		 	config: booksController.getBooks
 	},

	{
			method: 'GET',
			path: '/books/searchbyid/{id}',
			config: booksController.getBookId
 	},
	{
			method: 'GET',
			path: '/books/searchbyname/{titulo}',
			config: booksController.getBookName
 	},
	{
			method: 'GET',
			path: '/books/searchbygenre/{genero}',
			config: booksController.getBookGenre
 	},
	{
			method: 'GET',
			path: '/books/searchbyauthor/{autor}',
			config: booksController.getBookAuthor
 	},
	{
			method: 'GET',
			path: '/books/searchbykey', //FALTA HACER EJEMPLO POSTMAN
			config: booksController.getBookKey
 	},
	{
			method: 'GET',
			path: '/books/borrowed',
			config: booksController.getBookPrestado
 	},
 	{
 			method: 'PUT',
 			path: '/books/update/{id}',
 			config: booksController.modifyBook

 	},
	{
			method: 'PUT',
			path: '/books/borrowbook/{id}',
			config: booksController.putBookPrestado
 	},
	{
			method: 'DELETE',
			path: '/books/delete/{id}',
			config: booksController.deleteBook
 	},
	{
			method: 'POST',
			path: '/books/create',
			config: booksController.createBook
 	},
	{
		method: 'GET',
		path: '/',
		 config: {handler: function(request, reply){reply('API v1, Students')}}
	 },
	{
		method: 'GET',
		path: '/v1/students',
		 config: studentsController.getStudents
	 },
  {
		method: 'POST',
		path: '/v1/student',
		 config: studentsController.createStudent
	 },
	{
		method: 'POST',
		path: '/v1/register',
		 config: usersController.createUser
	 },
	{
		method: 'GET',
		path: '/v1/register',
		 config: {handler: function(request, reply){reply('Register')}}
	 },
	{
		method: 'POST',
		path: '/v1/login',
		 config: authController.login
	 },
	{
		method: 'GET',
		path: '/v1/logout',
		 config: authController.logout
	 }

];
