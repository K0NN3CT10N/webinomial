import * as React from 'react';

import Button from '@mui/material/Button';

const HeaderButton = (field) => (
    <>
        <Button variant="text" href="#{field}">{field.field}</Button>
    </>
)

export default HeaderButton;