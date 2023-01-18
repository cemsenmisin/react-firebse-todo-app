import React from 'react'
import './Todo.css';
import { List, ListItem, Avatar, ListItemAvatar, ListItemText} from '@material-ui/core'

function Todo(props) {
    return (
        <List>
            <ListItem className="todo_list">
            <ListItemAvatar>           
            </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dummy deadline" />
                </ListItem>
        </List>
   )
}

export default Todo
