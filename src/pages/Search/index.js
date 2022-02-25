import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '../../Components/Link'

import api from '../../service/api'

import './styles.css'

function Search() {
  const [value, setValue] = useState('');
  const [data, setData] = useState('padrao')

  function handleSubmit() {
    api.post('/api', {
      text: value,
    }).then(response => {
      setData(response.data.response)
    });
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Box className="search-container">
        <Stack spacing={2} direction="row">
          <TextField id="outlined-search" label="Pesquisar" type="search" value={value} onChange={handleChange}/>
          <Button variant="contained" onClick={handleSubmit}>Pesquisar</Button>
        </Stack>
      </Box>
      <Box className="links-container">
        {(data.length > 0 && data !== 'padrao') && <List data={data}/>}
        {(!data.length > 0 && data !== 'padrao') && <h1>Nenhum Resultado</h1>}
      </Box>
      
    </>
  );
}
  
  export default Search;