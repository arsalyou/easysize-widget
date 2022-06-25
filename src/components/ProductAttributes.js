import React, {useState, useEffect} from 'react';
import {Stack, Button, Typography} from '@mui/material';
import AttributesList from './AttributesList';

function ProductAttributes({attributes, handleClose, selectAttribute}) {

    const [selectedAttribute, setSelectedAttribute] = useState(null);

    useEffect(()=>{
        if(attributes.length > 0){
            const randomIndex = Math.floor(Math.random() * attributes.length); 
            setSelectedAttribute(attributes[randomIndex]);
        }

    }, [])
    console.log(selectAttribute);
    const handleSelectMe = () => {
        if(attributes.length > 0 ){
        // either function can work
        selectAttribute(selectedAttribute);
        // assuming id will be equal to attribute & in case if we have to trigger the click
        document.getElementById(selectedAttribute).click();
        }
        handleClose();
    }

    return (
        <Stack direction='column' spacing={1} sx={{alignItems:'center'}}>
             {
                attributes?.length > 0 ?
                <>
                <h4>Attributes</h4>
               <AttributesList attributes={attributes} />
               <h4> Randomly Selected Attribute</h4>
               <Typography  variant="h4">
                 {selectedAttribute}
             </Typography  >
             </>
             :
             <h6>No attribute passed in config</h6>
         }
        <Button variant="contained" onClick={handleSelectMe}>Select me</Button>
    </Stack>
    );
}

export default ProductAttributes;