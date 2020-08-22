import React, { useState } from 'react';
import axios from 'axios';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}


export default function PlayerForm(props) {
    const { initialName, initialPosition, initialStatus, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialPosition);
    const [status, setStatus] = useState(initialStatus);
    // const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, position, status})

        // const x = document.forms['name'].value;
        // const y = document.forms['quote'].value;
        // if (x == '') {
        //     alert('Name is required')
        // };
        // if (y == '') {
        //     alert('Quote is required')
        // };

        // axios.post('http://localhost:8000/authors', {
        //     name,
        //     quote
        // })
        //     .then(res=>console.log(res)) // If successful, do something with the response. 
        //     .catch(err=>{
        //         const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        //         const errorArr = []; // Define a temp error array to push the messages in
        //         for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
        //             errorArr.push(errorResponse[key].message)
        //         }
        //         // Set Errors
        //         setErrors(errorArr);
        //     }) 
    };

    return(
        <div className='player-form'>
        <Paper elevation={3} style={styles.paper}>
            <h1>Create a player</h1>
            <form onSubmit={ onSubmitHandler }>
                <FormControl variant='outlined' style={styles.input}>
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput type="text" name='name' onChange = { e => setName(e.target.value) }/>
                </FormControl>
                <FormControl variant='outlined' style={styles.input}>
                    <InputLabel>Position</InputLabel>
                    <OutlinedInput type="text" name='position' onChange = { e => setPosition(e.target.value) }/>
                </FormControl>
                <FormControl variant='outlined' style={styles.input}>
                    <InputLabel>Status</InputLabel>
                    <OutlinedInput type="text" name='status' onChange = { e => setStatus(e.target.value) }/>
                </FormControl><br/>
                <Button type="submit" variant="contained" color="primary">
                        Submit
                </Button>
            </form>
        </Paper> 
        </div>
    )
}