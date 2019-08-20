import React from "react";

import "./selectOption.css";
    
class Select extends React.Component{
    render(){
        return(
            <div className="option col-4">
                <select className="form-control col-12">
                    {this.props.options.map(optionItem =>(
                        <option>{optionItem}</option>
                    ))}
                    
                </select>
            </div>
        );

    }
}

export default Select;