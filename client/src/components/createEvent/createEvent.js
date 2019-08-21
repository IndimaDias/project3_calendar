import React from "react";
import dateFns from "date-fns";

import Header from "../header/header.js";
import "./createEvent.css";
import Select from "../selectOption/SelectOption.js";

import API from "../../utils/API.js"

class Event extends React.Component{
    
    state = {
        event : {
            eventTitle:"",
            startDate : "",
            startTime : "",
            endDate : "",
            endTime :"",
            repeat : "",
            location : "",
            notes : "",
            remind : "",
            type : "",
            invities : []
        },        
        repeatOption : ["Never", "Daily", "Weekly"],
        remindOption : ["At time of event","5 minutes before", 
                  "15 minutes before", "30 minutes before", 
                  "1 hour before","2 hours before", 
                  "1 day before", "1 week before"],
        eventType : ["Work","Invite"]          
    }
    
    setCurrentDate = () =>{
       
        const dateFormat = "YYYY-MM-DD";
        const timeFormat = "HH:mm";

        const date = new Date();

    // get current date
        const currentDate =  dateFns.format(date,dateFormat);

    //get current time    
        const currentTime =  dateFns.format(date,timeFormat);

    //    get the current time and add an hour
        const endingTime  = dateFns.format(dateFns.addHours(date,1),timeFormat);
       

        this.setState ({event : {...this.state.event, 
                        startDate: currentDate,
                        endDate : currentDate,
                        startTime :currentTime,
                        endTime : endingTime}});
        
    }


    componentDidMount (){
       
        this.setCurrentDate();
    }


     onCancelClick = () => {

    }

    onSubmitClick = () =>{
        // API.saveEvent({
        //     eventTitle : this.
        // })
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
                            value = {this.state.event.eventTitle}                    
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
                                value = {this.state.event.startDate}                                                                                                
                                required
                            />

                            <input
                                className = "form-control col-3"
                                id = "startTime"
                                type = "time"
                                value = {this.state.event.startTime}                        
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
                                value = {this.state.event.endDate}
                                required
                            />

                            <input
                                className = "form-control col-3"
                                id = "endTime"
                                type = "time"
                                value = {this.state.event.endTime}
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
                             options = {this.state.remindOption}/>
                            
                         </div>               
                    </div>

                    <div className = "row">
                         <div className = "form-group row">
                         <label htmlFor="Select" className="col-sm-2 col-form-label">Type</label>
                             <Select
                             options = {this.state.eventType}/>
                            
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
                            <button 
                              type="submit" 
                              className="btn btn-primary"
                              onClick = {this.onSubmitClick}
                            >
                              Save
                            </button>
                            <button 
                             className = "btn btn-secondory"
                             onClick = {this.onCancelClick}
                            >
                             Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default Event;