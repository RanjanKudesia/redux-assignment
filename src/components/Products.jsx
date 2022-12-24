import getFullData from "../data/FetchingData/fetchData";
import { useState, useEffect } from 'react';
import MediaCard from './ItemCard';
import { Grid } from "@material-ui/core";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Products() {

    const [state, setState] = useState(null);

    useEffect(() => {
        getFullData().then((response) => {
            // console.log(response);
            setState(response);
        })
    }, [])

    if (!state) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={6}>

                    <Grid item xs={2}>
                        <h4>Electronics</h4>
                        <h4>Mens wear</h4>
                    </Grid>
                    <Grid container xs display='flex' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        state.map((x) => {
                            return (
                                <>
                                    <Grid xs={4} ys={2}>
                                        <MediaCard details={x} />
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>
                    
                </Grid>
            </Box>
        </>
    );
}

export default Products;
