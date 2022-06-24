import React from 'react';
import ReactDOM from "react-dom";
import ProductWidget from './components/ProductWidget';
import exactTypeOf from './util';
import * as AppConstants from './AppConstants';

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
  console.log(exactTypeOf(['a','b','c']));
  const response = validateConfiguration();
  if(AppConstants.VALID == response){
    return {
      render: () => {
          ReactDOM.render(<ProductWidget img='https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg' attributes={['a','b','c']} placeholderText='CLICK' />, document.getElementById("root"));
      },
    }
  }else{
    // Don't render widget in production and console log the exact issue
    console.log(response);
  }
 
 
}
