import { FormControl, InputLabel, Select, TextField, Typography, MenuItem, Container, FormHelperText } from "@material-ui/core";
import React from "react";

function CadastroPost() {
    return (
        <>
            <Container maxWidth="xl" >
                <form>
                    <Typography variant="h4" align="center">Crie sua Postagem</Typography>

                    <TextField  id="titulo" name="titulo" label="Digite o titulo da sua postagem" variant="outlined" margin="normal" fullWidth />
                    <TextField  id="texto" name="texto" label="Digite o texto da sua postagem" variant="outlined"  margin="normal" fullWidth />
                    <TextField  id="foto" name="foto" label="Insira o link da foto em nuvem" variant="outlined"  margin="normal" fullWidth />

                    <FormControl>
                        <InputLabel id="demo-simple-select-helper-label">ODS </InputLabel>
                        <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper">
                            <MenuItem>ODS</MenuItem>
                        </Select>
                        <FormHelperText>Escolha uma ODS para a postagem</FormHelperText>
                    </FormControl>
                </form>
            </Container>
        </>
    );
}

export default CadastroPost;