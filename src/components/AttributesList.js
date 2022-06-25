import React from 'react';

function AttributesList({attributes}) {
    return (
        <>
            <ul>
            {
                attributes?.map((attribute, index) => {
                    return (
                        <li key={index}>{attribute}</li>
                    )})
            }
            </ul>
            </>
    );
}

export default AttributesList;