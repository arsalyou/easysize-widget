import React, { useState, useEffect } from 'react';
import { Dialog, Stack, Typography, Button} from '@mui/material';
import ProductImage from './ProductImage';
import ProductAttributes from './ProductAttributes';

function ProductWidget({ image, attributes, placeholderText, selectAttribute, cartButton  }) {
    const [tabIndex, setTabIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason && reason === "backdropClick")
            return;
        setOpen(false);
    }

    const openAttributes = () => {
        setTabIndex(1);
    }

    const openDialog = () => {
        setTabIndex(0);
        setOpen(true);  
    }
 
    return (
        <>
        <Button variant='contained' sx={{m:2}} onClick={openDialog}>{placeholderText ? placeholderText : 'Select Attribute'}</Button>
        <Dialog open={open} onClose={handleClose} >
            <Stack spacing={5} sx={{ alignItems: 'center', p: 3 }}>
                <Typography variant='h6'>EasySize Product</Typography>
                {tabIndex === 0 ?
                    <ProductImage image={image} openAttributes={openAttributes} />
                    :
                    <ProductAttributes attributes={attributes} handleClose={handleClose} selectAttribute={selectAttribute} />
                }
            </Stack>
        </Dialog>
        </>
    );
}

export default ProductWidget;