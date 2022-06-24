import React, {useState} from 'react';
import {Box, Stack, Button} from '@mui/material';
import CircularStatic from './LoadingScreen';

function ProductImage({image, openAttributes}) {
    const [showLoader, setShowLoader] = useState(false);

    const showProductAttribute = () => {
        setShowLoader(true);
        // loader
        const timer = setTimeout(()=>{
            openAttributes();
            clearTimeout(timer);
        }, 2000)
        
    }

    return (
        <Stack direction='column' sx={{alignItems:'center'}} >
            {showLoader ? <CircularStatic />
            : <>
            <Box component="img" src={image} sx={{ width: '50%', height:'50%' }} />
            <Button variant="contained" onClick={showProductAttribute}>Surprise me</Button>
            </>
            }
        </Stack>
    );
}

export default ProductImage;