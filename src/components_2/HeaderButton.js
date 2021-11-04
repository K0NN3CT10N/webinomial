import * as React from 'react';

import Button from '@mui/material/Button';

const HeaderButton = ({name, bob}) => (
    <>
        <Button variant="text" href="#{field}">{name} {bob}!</Button>
    </>
)

export default HeaderButton;