import Search from './components_1/Search';
import ListOfCards from './components_1/ListOfCards';
import MainImage from './components_1/MainImage';
import Footer from './components_1/Footer';

import {ThemeProvider, createTheme} from '@mui/material';
import {Box} from '@mui/system';

const theme = createTheme({
    palette: {
        primary: {
            main:  '#d1e2c4',
        },
    },        
});

const Home = () => (
    <ThemeProvider theme={theme}>
        <Box
            sx={{
            bgcolor: theme.palette.primary.main,
            margin: 0, 
            }}
        >
            <Search/>
            <MainImage/>
            <ListOfCards/>
            <Footer/>
        </Box>    
    </ThemeProvider>
)

export default Home;