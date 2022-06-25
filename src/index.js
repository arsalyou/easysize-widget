import React from 'react';
import ReactDOM from "react-dom";
import ProductWidget from './components/ProductWidget';
import exactTypeOf from './util';
import * as AppConstants from './AppConstants';
import useStore from '../store';

let configuration = null;

function validateConfiguration(){
  if (exactTypeOf(configuration) == AppConstants.OBJECT){
    for (const key in configuration) {
      switch(key) {
        case  AppConstants.ATTRIBUTES:
          if(exactTypeOf(configuration[key]) != AppConstants.ARRAY ) return `${AppConstants.INVALID_TYPE_OF} ${key}`;
          break;
        case AppConstants.PLACEHOLDER:
          if(exactTypeOf(configuration[key]) != AppConstants.STRING ) return `${AppConstants.INVALID_TYPE_OF} ${key}`;
          break;
        case  AppConstants.PLACEHOLDER_TEXT:
          if(exactTypeOf(configuration[key]) != AppConstants.STRING ) return `${AppConstants.INVALID_TYPE_OF} ${key}`;
          break;
        case AppConstants.CART_BUTTON:
          if(exactTypeOf(configuration[key]) != AppConstants.STRING ) return `${AppConstants.INVALID_TYPE_OF} ${key}`;
          break;
        case  AppConstants.IMAGE:
          if(exactTypeOf(configuration[key]) != AppConstants.STRING ) return `${AppConstants.INVALID_TYPE_OF} ${key}`;
          break;
        case AppConstants.SELECT_ATTRIBUTE:
          if(exactTypeOf(configuration[key]) != AppConstants.FUNCTION ) return `${AppConstants.INVALID_TYPE_OF} ${key}`;
          break;
      }
  }

  }else{
    return `${AppConstants.INVALID_TYPE_OF} CONFIGURATION`;
  }
  return AppConstants.VALID;
}

export function setConfiguration(config){
  configuration = config; 
}

export function loadWidget(){
  const response = validateConfiguration();
  const setProductAttributes = useStore(state => state.setProductAttributes);
  console.log(configuration.select_attribute);
    return {
      render: () => {
        if(AppConstants.VALID == response){
          let placeholderTag = document.querySelector(configuration.placeholder);
          let divElement = document.createElement('div');
          let brElement = document.createElement('br');
          divElement.setAttribute("id", "easysizeWgt");
          placeholderTag.appendChild(brElement);
          placeholderTag.appendChild(divElement);
          placeholderTag.appendChild(brElement);
          
          ReactDOM.render(<ProductWidget image={configuration.image} attributes={configuration.attributes} 
            placeholderText={configuration.placeholder_text} selectAttribute={configuration.select_attribute} 
            cartButton={configuration.cart_button}   />,
          document.getElementById('easysizeWgt'));
        }else{
           // Don't render widget in production and console log the exact issue
          console.log(response);
        }
      },
      unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('easysizeWgt')); 
      },
    }
}

