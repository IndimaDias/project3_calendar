import React from "react";
import dateFns from "date-fns";

import Header from "../header/header.js";
import "./createEvent.css";
import Select from "../selectOption/SelectOption.js";


class Event extends React.Component{
    
    state = {
        startDate : "",
        startTime : "",
        endDate : "",
        endTime :"",
        repeatOption : ["Never", "Daily", "Weekly"],
        remind : ["At time of event","5 minutes before", 
                  "15 minutes before", "30 minutes before", 
                  "1 hour before","2 hours before", 
                  "1 day before", "1 week before"],
        type : ["Work","Invite"]          
    }
    
    setCurrentDate = () =>{
       
        const dateFormat = "YYYY-MM-DD";
        const timeFormat = "HH:mm";

        const date = new Date();

        const currentDate =  dateFns.format(date,dateFormat);
        const currentTime =  dateFns.format(date,timeFormat);
    //    get the current time and add an hour
        const endingTime  = dateFns.format(dateFns.addHours(date,1),timeFormat);
       

        this.setState ({startDate : currentDate});
        this.setState ({endDate :  currentDate})
        this.setState({startTime :currentTime});
        this.setState({endTime : endingTime});
        
    }


    componentDidMount (){
       
        this.setCurrentDate();
    }

    render(){

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
                                className = " form-control col-3"
                                id = "startDate"
                                type = "date"                                
                                value = {this.state.startDate}                                
                                // placeholder = {this.state.startDate}
                                
                                required
                            />

                            <input
                                className = "form-control col-3"
                                id = "startTime"
                                type = "time"
                                value = {this.state.startTime}                        
                                required
                            />
                         </div>               
                    </div>

                    <div className = "row">
                         <div className = "form-group row">
                            <label htmlFor="endDate" className="col-sm-2 col-form-label">End</label>
                            <input
                                className = " form-control col-3"
                                id = "endDate"
                                type = "date"
                                value = {this.state.endDate}
                                required
                            />

                            <input
                                className = "form-control col-3"
                                id = "endTime"
                                type = "time"
                                value = {this.state.endTime}
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
                    <div className =" form-group row">
                         <label htmlFor="location" className="col-sm-2 col-form-label">Location</label>
                            <input
                                className = " form-control col-8"
                                id = "location"
                                type = "text"                               
                                required
                            />                        
                    </div>

                    <div className =" form-group row">
                         <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                            <textarea
                                className = " form-control col-8"
                                id = "notes"
                                type = "text"                                
                                required
                            />                        
                    </div>

                    <div className = "row">
                         <div className = "form-group row">
                         <label htmlFor="Select" className="col-sm-2 col-form-label">Remind</label>
                             <Select
                             options = {this.state.remind}/>
                            
                         </div>               
                    </div>

                    <div className = "row">
                         <div className = "form-group row">
                         <label htmlFor="Select" className="col-sm-2 col-form-label">Type</label>
                             <Select
                             options = {this.state.type}/>
                            
                         </div>               
                    </div>

                    <div className =" form-group row">
                         <label htmlFor="invites" className="col-sm-2 col-form-label">Invitees</label>
                            <input
                                className = " form-control col-8"
                                id = "invites"
                                type = "text"                            
                                required
                            />      
                            <button className="btn btn-sm iconButton"><i className="fa fa-plus"></i></button>                  
                    </div>

                    <div className = "btnRow">
                        <div className="row">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button className = "btn btn-secondory">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default Event;