import BootstrapButton from '../styles/button';
import BootstrapInput from '../styles/input';
import { Card, CardContent, Grid, Box, Snackbar, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ChangeEvent, FormEvent, useState } from 'react';
import { addUserR } from '../store/ducks/users';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { todo } from '../store/types';
import TodoItems from './TodoItem';
import React from 'react';


const style = {
  marginTop: '30px',
}

const todoWrapper = {
  height: '500px',
  overflowY: 'auto',
  padding: '0.3rem 2rem',
  margin: '1rem 0',
  border: '1px solid #ddd',
  borderRadius: '10px'
}

const Todo = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>('');
  const user: todo[] = useAppSelector((state) => state.user.user);
  const [showSnack, setShowSnack] = useState(false);
  const [message, setMessage] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim().length === 0 || title === '') {
      setMessage('Task Name Required')  
      return setShowSnack(true);
    }
    dispatch(addUserR({
      title,
      completed: false
    }))
    setTitle('');
    setMessage('Successfully Added');
    setShowSnack(true);
  }

  const handleClose = () => {
    setShowSnack(false);
  }



  return (
    <>
      <Snackbar
        open={showSnack}
        autoHideDuration={3000}
        message={message}
        onClose={handleClose}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
      <Card sx={{ ...style }}>
        <CardContent>
          <form onSubmit={submitFormHandler}>
            <Grid container spacing={3} >
              <Grid item md={8}>
                <BootstrapInput value={title} placeholder='Add Item' data-testid='input' fullWidth onChange={onChange} id="bootstrap-input" />
              </Grid>
              <Grid item md={4} alignSelf='center'>
                <BootstrapButton type='submit' variant="contained" disableRipple>
                  Add Task
                </BootstrapButton>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      <Box sx={{ ...todoWrapper }}>
        {user.length === 0 ? <p>No Task Added</p> : user.map(u => <TodoItems key={u.id} items={u} />)}
      </Box>

    </>
  )

}

export default Todo;