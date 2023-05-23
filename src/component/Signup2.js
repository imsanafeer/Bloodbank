import React from 'react'
import { Button,  FormControl,  FormControlLabel, Grid, IconButton, Input, InputAdornment, InputLabel, Stack, TextField, Typography,  } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//  import Visibility from '@mui/icons-material/Visibility';
//  import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

// import { CheckBox, Label } from '@material-ui/icons';

const Signup2 = () => {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


  return (
    <div className='App-header'>
           <Grid className='grid'>
                <div className='block'>
                    <Typography variant='h4' className='signup' > Donor Signup  </Typography>
                    <br>
                    </br>
                    <br></br>

                    <Stack direction={'row'} spacing={3} className='text'>

                        <TextField className='font' required label="firstname" ></TextField>

                        <TextField  className='font' required label="lastname"></TextField>

                    </Stack>

                    <br></br>

                    <Stack direction={'row'} spacing={2} className='align'>


                    </Stack>


                    <InputLabel > date of birth</InputLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                    </LocalizationProvider>
                    <br></br>
                    <br></br>

                    <TextField className='font' required label="E-mail"></TextField>
                    <br></br>
                    <br></br>

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="contained">
                        <InputLabel className='font' htmlFor="standard-adornment-password">
                            Enter your password
                        </InputLabel>
                        <Input
                            type={values.showPassword ? "text" : "password"}
                            onChange={handlePasswordChange("password")}
                            value={values.password}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>

                            }
                        />
                    </FormControl>

                    <br></br>

                    <br></br>
                    

                  
                    
                    




                    <Button   variant="contained" color='success'>SIGNUP</Button>
                    <br></br>
                    {/* <button className='butto'> signup</button> */}
                    <br></br>


                </div>
            </Grid>
      
    </div>
  )
}

export default Signup2
