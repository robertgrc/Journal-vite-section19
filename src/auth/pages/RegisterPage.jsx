import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email:'robert@gmail.com',
  password: '123456',
  displayName: 'PRBalrog'
}

const formValidations = {
  email: [(value)=>value.includes('@'), 'el correo debe tener un @'],
  password: [(value)=>value.length >=6, 'el password debe tener mas de 6 caracteres'],
  displayName: [(value)=>value.length >=1, 'el nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [formSubmited, setFormSubmited] = useState(false)

  const {status, errorMessage} = useSelector(state => state.auth)

  const isCheckingAuthentication = useMemo(()=>status==='checking',[status]);

  const{formState, displayName, email, password, onInputChange, isFormValid, emailValid, passwordValid, displayNameValid} = useForm(formData, formValidations);

  console.log( displayNameValid )


  const onSubmit = ( event ) =>{
    event.preventDefault();
    setFormSubmited(true)
    if ( !isFormValid ) return
    // console.log(formState)
    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
    <AuthLayout title="Crear cuenta">
      {/* <h1>FormValid: {isFormValid ? 'Valido': 'Incorrecto'}</h1> */}

      <form onSubmit={onSubmit}>
          <Grid container>
           
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmited }
                helperText={ displayNameValid }
              />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={ !!emailValid && formSubmited}
                helperText={ emailValid }
              />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contrase??a" 
                type="password" 
                placeholder='Contrase??a' 
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={ !!passwordValid && formSubmited}
                helperText={ passwordValid }
              />
            </Grid>
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid 
                item 
                xs={ 12 }
                display={!!errorMessage ? '': 'none' }  
              >
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
              <Grid item xs={ 12 }>
                <Button
                  disabled={ isCheckingAuthentication } 
                  type='submit'
                  variant='contained' 
                  fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>??Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
