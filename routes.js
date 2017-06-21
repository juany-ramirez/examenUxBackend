var studentsController = require('./controllers/studentsController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var hechizosController = require('./controllers/hechizosController');

exports.endpoints = [
	{
			method: 'GET',
		 	path: '/hechizos',
		 	config: hechizosController.getBooks
 	},

	{
			method: 'GET',
			path: '/hechizos/searchbyid/{id}',
			config: hechizosController.getBookId
 	},
	{
			method: 'GET',
			path: '/hechizos/searchbyname/{titulo}',
			config: hechizosController.getBookName
 	},
	{
			method: 'GET',
			path: '/hechizos/searchbygenre/{genero}',
			config: hechizosController.getBookGenre
 	},
	{
			method: 'GET',
			path: '/hechizos/searchbyauthor/{autor}',
			config: hechizosController.getBookAuthor
 	},
	{
			method: 'GET',
			path: '/hechizos/searchbykey', //FALTA HACER EJEMPLO POSTMAN
			config: hechizosController.getBookKey
 	},
	{
			method: 'GET',
			path: '/hechizos/borrowed',
			config: hechizosController.getBookPrestado
 	},
 	{
 			method: 'PUT',
 			path: '/hechizos/update/{id}',
 			config: hechizosController.modifyBook

 	},
	{
			method: 'PUT',
			path: '/hechizos/borrowbook/{id}',
			config: hechizosController.putBookPrestado
 	},
	{
			method: 'DELETE',
			path: '/hechizos/delete/{id}',
			config: hechizosController.deleteBook
 	},
	{
			method: 'POST',
			path: '/hechizos/create',
			config: hechizosController.createBook
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
