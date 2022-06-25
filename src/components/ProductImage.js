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
    console.log("ProductImage"+image);

    return (
        <Stack direction='column' spacing={1} sx={{alignItems:'center'}} >
            {showLoader ? <CircularStatic />
            : <>
           
            <img src={image} width="500" height="500" />
            <Button variant="contained" onClick={showProductAttribute}>Surprise me</Button>
            </>
            }
        </Stack>
    );
}

export default ProductImage;