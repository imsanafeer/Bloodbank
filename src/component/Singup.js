import { Button, FormControl, FormControlLabel,  Grid, IconButton, Input, InputAdornment, InputLabel, Stack, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//  import Visibility from '@mui/icons-material/Visibility';
//  import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";




import React from 'react'
// import { CheckBox, Label } from '@material-ui/icons';
// import { Label } from '@material-ui/icons';
// export  function InputAdornments() {
//     const [showPassword, setShowPassword] = React.useState();

//     const handleClick =()=>{ setShowPassword((show) => !show);

//     }

//     };



//password

const Singup = () => {
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
                    <Typography variant='h4' className='signup' > Reciever Signup  </Typography>
                    <br>
                    </br>
                    <br></br>

                    <Stack direction={'row'} spacing={3} className='text'>

                        <TextField required label="firstname" ></TextField>

                        <TextField required label="lastname"></TextField>

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

                    <TextField required label="E-mail"></TextField>
                    <br></br>
                    <br></br>

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="contained">
                        <InputLabel htmlFor="standard-adornment-password">
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
                    <br></br>

                    




                    <Button variant="contained">SUBMIT</Button>
                    <br></br>
                    


                </div>
            </Grid>
        </div>
    )
}

export default Singup
