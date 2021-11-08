import * as React from 'react';

// import Search from './components_1/Search';
import SupportingImage from './components_1/MainImage';
import Footer from './components_1/Footer';
import Descriptions from './components_1/Descriptions';


const UniversityPage = ({name}) => (
    <>
        {/* <Search/> */}
        <h1>{name}</h1>
        <SupportingImage/>
        <Descriptions/>
        <SupportingImage/>
        <Footer/>
    </>
)

export default UniversityPage;