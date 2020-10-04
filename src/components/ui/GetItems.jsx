import React from 'react';
import { GralItems } from './navbars/GralItems';
import { InventoryItems } from './navbars/InventoryItems';
import { QuoteOption } from './QuoteOption';

const role = Number(localStorage.getItem('role'));

export const GetItems = () => {
    switch (role) {
        case 0:
            return (<GralItems/>)
        case 1:
            return (<>
                        <GralItems/> 
                        <QuoteOption/>
                    </>
            )
        case 2:
            return (<InventoryItems/>)
    
        default:
            break;
    }
}
