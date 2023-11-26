import { Stack, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Box minHeight='95vh'>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        height='80vh'
      >
        <CircularProgress color='#107cf1' />
      </Stack>
    </Box>
  );
};

export default Loader;
