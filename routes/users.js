import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();
let users = [];


//All routes in this file will be prefixed with /
router.get('/', (req, res) => {
  console.log(users);
  console.log(req.body);
  res.send(users);
});

router.post('/',(req,res)=>{  
  console.log("POST request to /users");
  const user = req.body;

  users.push( { ...user, id: uuidv4() }); // Add the userID to the array

  res.send('User added with name: ' + user.firstname + ' ' + user.lastname +' '+ 'added to the database');
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;// destructuring the id from the params

  //filtering and deleting the user with the id from the array of users
    users = users.filter((user) => user.id !== id);

  //sending the filtered and deleted users as the response
  res.send(`User with the id ${id} deleted from the database`);

  res.send("THe get id route is being called");

});


//Patch request to update the user with the name and age
router.patch('/:id', (req, res) => {
  const {id} = req.params;// destructuring the id from the params
  const { firstname, lastname, age } = req.body;// destructuring the firstname, lastname and age from the body
  const user = users.find((user) => user.id === id);// finding the user with the id from the params
  
  if (firstname) user.firstname = firstname;// updating the firstname of the user
  if (lastname) user.lastname = lastname;// updating the lastname of the user
  if (age) user.age = age;// updating the age of the user
  res.send(`User with the id ${id} has been updated`);// sending the response with the id of the user that has been updated
})




export default router;
