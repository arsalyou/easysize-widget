import React, { useState } from 'react';
import { Dialog, Stack, Typography, Button} from '@mui/material';
import ProductImage from './ProductImage';
import ProductAttributes from './ProductAttributes';

function ProductWidget({ image, attributes, placeholderText, selectAttribute, cartButton  }) {
    const [tabIndex, setTabIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason && reason === "backdropClick")
            return;
        setTabIndex(0);
        setOpen(false);
    }

    const openAttributes = () => {
        setTabIndex(1);
    }

    const openDialog = () => {
        setOpen(true);  
    }

    return (
        <>
        <Button onClick={openDialog}>{placeholderText}</Button>
        <Dialog open={open} onClose={handleClose} >
            <Stack spacing={5} sx={{ alignItems: 'center', p: 3 }}>
                <Typography variant='h6'>EasySize Product</Typography>
                {tabIndex === 0 ?
                    <ProductImage image={image} openAttributes={openAttributes} />
                    :
                    <ProductAttributes attributes={attributes} handleClose={handleClose} />
                }
            </Stack>
        </Dialog>
        </>
    );
}

export default ProductWidget;