import * as React from 'react';

import Button from '@mui/material/Button';

const HeaderButton = ({name}) => (
    <>
        <Button variant="text" color='secondary'>{name}</Button>
    </>
)

export default HeaderButton;