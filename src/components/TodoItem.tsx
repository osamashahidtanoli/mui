import { useAppDispatch } from '../store/hooks';
import { Card, CardContent, Grid, Checkbox, IconButton, Modal, Box, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { changeStatus, changeStatusFalse, deleteItem } from '../store/ducks/users';
import { ChangeEvent, useState } from 'react';
import { Edit } from '@mui/icons-material';
import BootstrapButton from '../styles/button';
import BootstrapInput from '../styles/input';
type TodoProps = {
    items: {
        id: number,
        title: string,
        completed: boolean
    }
}

const styleMargin = {
    marginTop: '1rem',
    color: '#fff'

}

const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const changePadding = {
    paddingTop: '10px',
    paddingBottom: '10px !important'
}

const TodoItems = (props: TodoProps) => {
    const { items } = props;
    const [showModal, setShowModal] = useState(false);
    const [newTitle, setNewTitle] = useState<string>('')
    const dispatch = useAppDispatch();

    const handleClose = () => {
        setShowModal(false);
    }

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(changeStatus(items.id))
        }
        else {
            dispatch(changeStatusFalse(items.id))
        }
    }

    const deleteItemHandler = () => {
        dispatch(deleteItem(items.id))
    }

    const nameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value);
    }

    const editNameHandler = () => {
        items.title = newTitle;
    }



    return (
        <>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Enter New Title
                    </Typography>
                    <BootstrapInput onChange={nameChange} value={newTitle} fullWidth />
                    <BootstrapButton onClick={function (event) { editNameHandler(); handleClose() }} sx={{ marginTop: '1rem' }} variant='contained'>Save Changes</BootstrapButton>

                </Box>
            </Modal>

            

            <Card sx={{ ...styleMargin, }}>
                <CardContent sx={{ ...changePadding, backgroundColor: `${items.completed === false ? '#a9d9ff' : '#82ff89'}` }}>
                    <Grid container>
                        <Grid item xs={2}>
                            <Checkbox checked={items.completed ? true : false} onChange={changeStatusHandler} color='secondary' />

                        </Grid>
                        <Grid item xs={8} alignSelf='center'>
                            <div>{items.title}</div>
                        </Grid>
                        <Grid>
                            <IconButton onClick={deleteItemHandler} sx={{ color: 'red' }}><DeleteIcon /></IconButton>
                            <IconButton onClick={() => setShowModal(true)} sx={{ color: '#fff' }}><Edit /></IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default TodoItems;