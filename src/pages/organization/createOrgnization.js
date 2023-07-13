import React, {useState} from 'react'
import { Grid, TextField, Button, Typography, Paper } from "@material-ui/core"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Formik } from 'formik';
import {createOrgnization} from '../organization/../../services/createOrg.service'



const paperStyle = { padding: 20, height: '68vh', width: 725, margin: "77px auto" }

const fontSize = {
  "font-size": "inherit", "font-weight": "inherit", "text-align": "left"
}

const button = {
  margin: "29px -208px 29px 327px",
  "margin-right": "-208px",
  "background-color": "#34b27b"
}
const cancel = {
  "margin-top": "-111px",
  "margin-left": "-636px"
}



export default function CreateOrgnization() {
  const [name, setName] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [category, setCategory] = React.useState("")



  const addPosts = async (reqObj) => {
    await fetch('{{API_GATEWAY_URl}}/org/api/{{API_VERSION}}/', {
       method: 'POST',
       body: JSON.stringify({
          body: reqObj,
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
       .then((response) => response.json())
       .catch((err) => {
          console.log(err.message,"error------");
       });
 };
 
 var reqObjP = {
  name: "dododuck",
  description: "dododuck",
  type: "personal",
  category:"personal"
}

  const handleSubmit = ()=>{

    console.log(reqObjP,"reqObj-------------------------")
   let data =  createOrgnization(reqObjP)
   console.log(data,"data--------")
  }


  console.log(name,description,category,"-------------------------------")

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Typography style={fontSize} >Create a new organization</Typography>
          <p style={fontSize}>This is your organization within Supabase.</p>
          <p style={fontSize}>For example, you can use the name of your company or department.</p>
        </Grid>
        <TextField placeholder='Organization name' variant="outlined" size='small' label="Name" id="outlined-helperText" helperText="What's the name of your company or team ?" fullWidth onChange={(e) => setName(e.target.value)} required />
        <TextField placeholder='Description' variant="outlined" size='full' label="Description" helperText="What would best describe your organization?" fullWidth onChange={(e) => setDescription(e.target.value)} required />
        <TextField placeholder='Organization name' variant="outlined" size='small' label="category" id="outlined-helperText" helperText="What's the category of your company or team ?" fullWidth onChange={(e) => setCategory(e.target.value)} required />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"

          >
            <MenuItem value>Options------</MenuItem>
            <MenuItem value>personal</MenuItem>
            <MenuItem value>owners</MenuItem>
          </Select>
        </FormControl>
        <Button style={button} variant="contained" size="small" color="success" onClick={handleSubmit}>Create organization
          <Link to="/create/project"></Link>
        </Button>
        <div>
          <Button style={cancel} variant="contained" size="small" type = "submit">Cancel</Button>
        </div>
      </Paper>
    </Grid>

  )
}

<TextField
  id="filled-helperText"
  label="Helper text"
  defaultValue="Default Value"
  helperText="Some important text"
  variant="filled"
/>