import React from 'react';
import ReactDOM from "react-dom";
import ProductWidget from './components/ProductWidget';


export function loadWidget(config){
  return {
    render: () => {
        ReactDOM.render(<ProductWidget img='https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg' attributes={['a','b','c']} placeholderText='CLICK' />, document.getElementById("root"));
    },
  }
}
