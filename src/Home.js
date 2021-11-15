import Search from './components_1/Search';
import ListOfCards from './components_1/ListOfCards';
import MainImage from './components_1/MainImage';
import Footer from './components_1/Footer';

import {ThemeProvider, createTheme} from '@mui/material';
import {Box} from '@mui/system';

const theme = createTheme({
    palette: {
        primary: {
            main:  '#dfe16a',
        },
    },        
});

const Home = () => (
    <ThemeProvider theme={theme}>
        <Box
            sx={{
            color: theme.palette.primary.main, 
            }}
        >
            {/* <Search/> */}
            <MainImage/>
            <ListOfCards/>
            <Footer/>
        </Box>    
    </ThemeProvider>
)

export default Home;