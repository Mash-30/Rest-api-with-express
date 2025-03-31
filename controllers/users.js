import { v4 as uuidv4 } from 'uuid';

// This is an array of users that will be used to store the users
let users = [];

//This is an getUsers function that will be used to get all the users from the array of users
 export const getUsers = (req, res) => {
  console.log(users);// logging the users array to the console
  console.log(req.body);// logging the request body to the console
  res.send(users);// sending the users array as the response
}
// This is an Createuser function that will be used to create a user in the array of users
export const Createuser = (req, res) => {
    const user = req.body;// destructuring the user from the body
    users.push( { ...user, id: uuidv4() }); // Add the userID to the array
    res.send('User added with name: ' + user.firstname + ' ' + user.lastname +' '+ 'added to the database');// sending the user as the response
}
// This is an deleteUser function that will be used to delete a user from the array of users
export const deleteUser = (req, res) => {
    const { id } = req.params;// destructuring the id from the params
  users = users.filter((user) => user.id !== id);// filtering and deleting the user with the id from the array of users
  res.send(`User with the id ${id} deleted from the database`); //sending the filtered and deleted users as the response
}
// This is an updateUser function that will be used to update a user in the array of users
export const updateUser = (req, res) => {
  const {id} = req.params;// destructuring the id from the params
  const { firstname, lastname, age } = req.body;// destructuring the firstname, lastname and age from the body
  const user = users.find((user) => user.id === id);// finding the user with the id from the params
  if (firstname) user.firstname = firstname;// updating the firstname of the user
  if (lastname) user.lastname = lastname;// updating the lastname of the user
  if (age) user.age = age;// updating the age of the user
  res.send(`User with the id ${id} has been updated`);// sending the response with the id of the user that has been updated
}
  