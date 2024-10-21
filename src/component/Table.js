import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { addUser , deleteUser } from '../action/action.js';

const UserTable = () => {
    const dispatch = useDispatch();
    const users = useSelector((state => state.users))
    console.log('users',users);
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log('response',response);
            const fetchedUsers = response.data.map(user => ({
              id: user.id,
              name: user.name
            }));
            console.log('fetchedUsers',fetchedUsers)
            fetchedUsers.forEach(user => {
              dispatch(addUser(user));
            });
          } catch (error) {
            console.error("Error fetching users:", error);
          }
        };
        fetchUsers();
      }, [dispatch]);

      const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {users.map((user) => (
                <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>
                    <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(user.id)}
                    >
                    Delete
                    </Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    );
}


export default UserTable;
    