import { Typography, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, createTheme, ThemeProvider, Rating, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { tableCellClasses } from '@mui/material/TableCell';
import { blue, blueGrey } from '@mui/material/colors';
import axios from 'axios';


const Movie = () => {
    const theme = createTheme({
        palette: {
        primary: {
        main: '#b2102f',
        },
        secondary: {
        main: '#11cb5f',
        },
        },
        });
    const color = "#b2102f";
    const color2 = blueGrey[900];
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: color2,
            color: color,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    const deletes =(id) =>{
        console.log("Deleting "+id);
        axios.delete("http://localhost:8080/movies/"+id)
        .then(response=>{
            alert("Deleted")
            window.location.reload(false)
        })
    }
    var [students, setstud] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/movies")
            .then(response => {
                console.log(response.data)
                setstud(students = response.data)
            })
            .catch(err => console.log(err))
    },[])
    return (
        <div>
            <br></br>
            <Typography variant='h3'>Movies</Typography>
           
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Year</StyledTableCell>
                            <StyledTableCell>Gener</StyledTableCell>
                            <StyledTableCell>Rating</StyledTableCell>
                            <StyledTableCell>Director</StyledTableCell>
                            <StyledTableCell>Producer</StyledTableCell>
                            <StyledTableCell>Cast</StyledTableCell>
                            <StyledTableCell>Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((value, index) => {
                            return <TableRow>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.year}</TableCell>
                                <TableCell>{value.gener}</TableCell>
                                <TableCell> <Rating name="read-only" value={value.rating} readOnly /></TableCell>
                                <TableCell>{value.director}</TableCell>
                                <TableCell>{value.producer}</TableCell>
                                <TableCell>{value.cast}</TableCell>
                                <TableCell><ThemeProvider theme={theme}><Button variant='contained' onClick={()=>deletes(value.id)}>Delete</Button></ThemeProvider></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Movie
