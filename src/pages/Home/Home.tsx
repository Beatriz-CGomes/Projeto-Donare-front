import React from "react";
import { Avatar, Grid, Paper, Typography } from "@material-ui/core";

import './Home.css'
import { Box } from "@mui/material";

function Home() {
    return (
        <>
            <Grid direction="row" justifyContent="center" container className="bg-color">
                <Grid item xs={3}>
                    <Box className="card">
                        <Avatar className="icons">D</Avatar>
                        <Typography variant="h5" className="titulo">Usuario</Typography>
                    </Box>

                    <Box className="card">
                        <Typography variant="h6" className="titulo">Grupos</Typography>
                        <Typography variant="h6" className="titulo">Doações</Typography>
                        <Typography variant="h6" className="titulo">Sobre</Typography>
                        <Typography variant="h6" className="titulo">ONGS</Typography>
                    </Box>

                </Grid>
                <Grid item xs={6}>
                    <Paper className="altura" />
                </Grid>

                <Grid item xs={3}>
                    <Box className="card2">
                        <Typography variant="h5" component='h5' align="center" className="titulo">Últimas Notícias sobre ONGs</Typography>
                    </Box>

                    <Box className="card2">
                        <Typography variant="h5" component='h5' align="center" className="titulo">Recomendações</Typography>
                    </Box>
                    <Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
