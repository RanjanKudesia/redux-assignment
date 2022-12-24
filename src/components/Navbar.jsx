import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary,
}));

const Navbar = () => {

    const items = useSelector((state) => {
        return state.cart.length;
    });
    console.log(items)

    return (
        <>
            <Box component='nav' sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Stack direction="row" alignItems='flex-end' spacing={2}>
                            <Item>
                                <Typography
                                    variant="h3"
                                    noWrap
                                    component="div"
                                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                >
                                    ≡
                                </Typography>
                            </Item>
                            <Item>
                                <Typography
                                    variant="h4"
                                    noWrap
                                    component="div"
                                    sx={{ align: 'right', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                >
                                    &#128722;:{items}
                                </Typography>
                            </Item>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>

            <Card sx={{ maxWidth: 1500 }}>
                <CardMedia
                    sx={{ height: 400 }}
                    image="/Images/nav-logo.jpeg"
                    title="green iguana"
                />
            </Card>
        </>
    )
}

export default Navbar
