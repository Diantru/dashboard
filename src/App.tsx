import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Grid} from '@mui/material';

function App() {

  return (
    <Grid container spacing={5} sx={{ justifyContent: 'center', alignItems: 'center'}}>

      {/*Encabezado*/}
      <Grid size={{xs: 12, md:12}}>Elemento: Encabezado</Grid>

      <Grid size={{xs: 12, md:12}}>Elemento: Alertas</Grid>

      <Grid size={{xs: 12, md:3}}>Elemento: Selector</Grid>

      <Grid size={{xs: 12, md:9}}>Elemento: Indicadores</Grid>

      <Grid size={{xs: 12, md:6}} sx={{display: { xs:'none', md:'block'}}}>Elemento: Gráfico</Grid>
      
      <Grid size={{xs: 12, md:6}} sx={{display: { xs:'none', md:'block'}}}>Elemento: Tabla</Grid>

      <Grid size={{xs: 12, md:12}}>Elemento: Información adicional</Grid>

    </Grid>
  )
}

export default App
