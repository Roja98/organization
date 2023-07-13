import React from 'react'
import { Grid, TextField, Button, Typography, Paper, Item } from "@material-ui/core"
import { FormControl, FormLabel } from '@mui/material';


const paperStyle = { padding: 20, height: '77vh', width: "653px", margin: "31px auto" }
const fontSize = {
    "font-size": "inherit", "font-weight": "inherit", "text-align": "left"
}


const button = {
    "margin": "3px -208px 29px 531px",
    "margin-right": "-208px",
    "background-color": "#34b27b"
}

const cancel = {
    "margin-top": "7px",
    "margin-left": "-809px"
}

export default function CreateProject() {
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Typography style={fontSize} >Create a new organization</Typography>
                    <p style={fontSize}>This is your organization within Supabase.</p>
                    <p style={fontSize}>For example, you can use the name of your company or department.</p>

                </Grid>
                <form>
                    <Grid container spacing={4}>
                        <Grid item xs={3}>
                            <label>Organization</label>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField style={{ backgroundColor: "rgba(5,41,77,.028)" }} placeholder='Organization name' variant="outlined" size='small' id="outlined-helperText" fullWidth required />
                        </Grid>

                        <Grid item xs={3}>
                            <label>Name</label>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField style={{ backgroundColor: "rgba(5,41,77,.028)" }} variant="outlined" size='small' placeholder="Name" id="outlined-helperText" fullWidth required />
                        </Grid>

                        <Grid item xs={3}>
                            <label>Database Password</label>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField style={{ backgroundColor: "rgba(5,41,77,.028)" }} placeholder='Type in a strong password' variant="outlined" size='small' helperText="This is the password to your postgres database, so it must be a strong password and hard to guess." id="outlined-helperText" fullWidth required />
                        </Grid>
                        <Grid item xs={3}>
                            <label>Region</label>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField style={{ backgroundColor: "rgba(5,41,77,.028)" }} placeholder='Type in a strong password' variant="outlined" size='small' helperText="Select a region close to your users for the best performance." id="outlined-helperText" fullWidth required />
                        </Grid>
                        <Button style={button} variant="contained" size="small" color="success">Create project</Button>
                        <div>
                            <Button style={cancel} variant="contained" size="small">Cancel</Button>
                        </div>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )

}

