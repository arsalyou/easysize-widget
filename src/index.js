import React from 'react';
import ReactDOM from "react-dom";


export function loadWidget(config){
  return {
    render: () => {
        ReactDOM.render(<h3>Hello</h3>, document.getElementById("root"));
    },
  }
}
