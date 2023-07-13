import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid, Paper, TextField, Button } from "@material-ui/core"


const drawerWidth = 240;

export default function Settings() {
    const navItems = ['General', 'Team', 'Integrations', 'Billing', 'Invoices'];
    const paperStyle = { padding: 20, height: '58vh', width: 707, margin: "25px auto" }
    const button = {
        margin: "40px -103px 53px 353px",
        "margin-right": "-208px",
        "background-color": "#34b27b"
    }
    const cancel = {
        "margin-top": "-164px",
        "margin-left": "384px"
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <Typography variant="h8" noWrap component="div">
                        Organization
                    </Typography>
                </List>
                <Divider />
                <List>
                    <Typography variant="h6" noWrap component="div">
                        Project
                    </Typography>
                    <Typography variant="h8" noWrap component="div">
                        All Project
                    </Typography>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <List style={{
                    display: "inline-flex", margin: "-14px",
                    "margin-left": "140px"
                }}>
                    {navItems.map((item) => (
                        <ListItem key={item}>
                            <ListItemButton sx={{ textAlign: 'left' }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <div>
                    <Paper elevation={10} style={paperStyle}>
                        <Typography variant="h8" style={{ "text-align": "left" }}>
                            General settings
                        </Typography>
                        <Grid container spacing={4}>
                        <Grid item xs={3}>
                            <label>Organization</label>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField style={{ backgroundColor: "rgba(5,41,77,.028)" }} placeholder='Organization name' variant="outlined" size='small' id="outlined-helperText" fullWidth required />
                        </Grid>

                        <Grid item xs={3}>
                            <label>Description</label>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField style={{ backgroundColor: "rgba(5,41,77,.028)" }} variant="outlined" size='full' placeholder="Description" id="outlined-helperText" fullWidth required />
                        </Grid>

                        <Grid item xs={3}>
                            <label>Type</label>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField style={{ backgroundColor: "rgba(5,41,77,.028)" }} placeholder='Type' variant="outlined" size='small' helperText="This is the password to your postgres database, so it must be a strong password and hard to guess." id="outlined-helperText" fullWidth required />
                        </Grid>
                        </Grid>
                        <Button style={button} variant="contained" size="small" color="success">Save
                        </Button>
                        <div>
                            <Button style={cancel} variant="contained" size="small">Cancel</Button>
                        </div>
                    </Paper>
                </div>
                <Toolbar />

            </Box>
        </Box>
    )

}