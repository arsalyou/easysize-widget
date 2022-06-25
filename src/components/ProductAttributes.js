import React, {useState, useEffect} from 'react';
import {Stack, Button, Typography} from '@mui/material';

function ProductAttributes({attributes, handleClose, selectAttribute}) {

    const [selectedAttribute, setSelectedAttribute] = useState(null);

    useEffect(()=>{
        const randomIndex = Math.floor(Math.random() * attributes.length); 
        setSelectedAttribute(attributes[randomIndex]);
        

    }, [])
    console.log(selectAttribute);
    const handleSelectMe = () => {
        // either function can work
        selectAttribute(selectedAttribute);
        // assuming id will be equal to attribute & in case if we have to trigger the click
        document.getElementById(selectedAttribute).click();
        handleClose();
    }

    return (
        <Stack direction='column' sx={{alignItems:'center'}}>
            <ul>
            {
                attributes.map((attribute, index) => {
                    return (
                        <li  style={{display:'flex', flexDirection:'row', flexFlow:'rowWrap'}} key={index} >{attribute}</li>
                    )})
                
            }
            </ul>

            <h3> Randomly Selected Attribute</h3>
              <Typography  variant="h4">
                {selectedAttribute}
            </Typography  >


       
        <Button variant="contained" onClick={handleSelectMe}>Select me</Button>
    </Stack>
    );
}

export default ProductAttributes;