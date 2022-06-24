import React, {useState, useEffect} from 'react';
import {Stack, Button, Typography} from '@mui/material';

function ProductAttributes({attributes, handleClose}) {

    const [selectedAttribute, setSelectedAttribute] = useState(null);

    useEffect(()=>{
        const randomIndex = Math.floor(Math.random() * attributes.length); 
        setSelectedAttribute(attributes[randomIndex]);
        console.log(randomIndex);

    }, [])

    const handleSelectMe = () => {
        handleClose();
    }

    return (
        <Stack direction='column' sx={{alignItems:'center'}}>
            {
                attributes.map((attribute, index) => {
                    return (
                        <li key={index}>{attribute}</li>
                    )})
                
            }

            <h2> Randomly Selected Attribute</h2>
              <Typography  variant="h4">
                {selectedAttribute}
                </Typography  >


       
        <Button variant="contained" onClick={handleSelectMe}>Select me</Button>
    </Stack>
    );
}

export default ProductAttributes;