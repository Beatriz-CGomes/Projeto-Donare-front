import "./Cadastro.css";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

function Cadastrar() {
    return (
        <Grid container className="bg-page" justifyContent="center">
            <Grid item alignItems="center">

                <form>
                    <Typography className="titulo">Cadastre-se!</Typography>

                    <Typography className="text-form">Nome completo:</Typography>
                    <TextField id="nome" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Usuário:</Typography>
                    <TextField id="usuario" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">E-mail:</Typography>
                    <TextField id="e-mail" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Senha:</Typography>
                    <TextField id="senha" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Confirme a senha:</Typography>
                    <TextField id="senha-confirm" variant="outlined" margin="normal" fullWidth />

                    <Link to='/home' style={{ textDecoration: 'none' }}>
                        <Box textAlign="center" marginTop={2}>
                            <Button type="submit" className="buttom">Cadastrar</Button>
                        </Box>
                    </Link>
                </form>

            </Grid>
        </Grid>
    );
}

export default Cadastrar;