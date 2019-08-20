import React from "react";

import Header from "../header.js";
import "./createEvent.css";
import Select from "../SelectOption.js";


class Event extends React.Component{
    
    state = {
        startDate : "",
        startTime : "",
        endDate : "",
        endTime :"",
        repeatOption : ["Never", "Daily", "Weekly"]
    }
    
    render(){
        console.log("test2");
        return(
            <div className = "container">  
                <Header
                 heading = "Create Event"/>
                <form>
                    <div className = "form-group">
                    <input
                        className="form-control col-10"
                        id="Title"
                        type="text"                    
                        placeholder="New Event"                    
                        required
                    />
                    </div>
                    <div className = "row">
                         <div className = "form-group row">
                            <label htmlFor="startDate" className="col-sm-2 col-form-label">Start</label>
                            <input
                                className = " form-control col-2"
                                id = "startDate"
                                type = "date"
                                placeholder = {this.startDate}
                                required
                            />

                            <input
                                className = "form-control col-2"
                                id = "startTime"
                                type = "time"
                                placeholder = {this.startTime}
                                required
                            />
                         </div>               
                    </div>

                    <div className = "row">
                         <div className = "form-group row">
                            <label htmlFor="endDate" className="col-sm-2 col-form-label">End</label>
                            <input
                                className = " form-control col-2"
                                id = "endDate"
                                type = "date"
                                placeholder = {this.endDate}
                                required
                            />

                            <input
                                className = "form-control col-2"
                                id = "endTime"
                                type = "time"
                                placeholder = {this.endTime}
                                required
                            />
                         </div>               
                    </div>

                    <div className = "row">
                         <div className = "form-group row">
                         <label htmlFor="Select" className="col-sm-2 col-form-label">Repeat</label>
                             <Select
                             options = {this.state.repeatOption}/>
                            
                         </div>               
                    </div>
                </form>
            </div>
            
        );
    }
}

export default Event;