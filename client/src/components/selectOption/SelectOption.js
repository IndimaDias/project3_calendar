import React from "react";

import "./selectOption.css";
    
class Select extends React.Component{
    render(){
        console.log(this.props.options[0].id)
        return(
            <div className="option col-4">
                <select 
                    selected = {this.props.options[0].id}
                    id = {this.props.name}
                    name = {this.props.name}
                    value = {this.props.value}
                    onChange = {() => this.props.handleInputChange}
                    className="form-control col-12"
                    
                    >
                    {this.props.options.map(optionItem =>(
                        <option 
                          id = {optionItem.id} 
                          value = {optionItem.id}
                          key = {optionItem.id}
                        //   onChange = {this.props.handleInputChange}
                        > {optionItem.option}
                        </option>
                    ))}
                    
                </select>
            </div>
        );

    }
}

export default Select;