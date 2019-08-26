import React from "react";
import dateFns from "date-fns";

import Header from "../header/header.js";
import "./createEvent.css";
import Select from "../selectOption/SelectOption.js";

import API from "../../utils/API.js"

import repeatOption from "../../repeatOption.json";
import remindOption from "../../remindOption.json";
import eventType from "../../eventType.json"

class Event extends React.Component{
    constructor(props){
        super(props);

        this.state = {
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
            repeatOption,
            remindOption,
            eventType ,
            userId : 1          
        }
        
        
        this.handleInputChange = this.handleInputChange.bind(this);
    
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

    handleInputChange = ev =>{
        console.log("test1");
        let value = ev.target.value;
        console.log(value);
        const name = ev.target.name;
        console.log(name);

        // this.setState({[name]:value});
        this.setState({event : {...this.state.event, [name] : value}});
        
    }

    handleSelectChange = selectedOption =>{
        console.log("test");
        this.setState({event : {...this.state.event, repeat : selectedOption}});
        console.log(selectedOption);
    }

    componentDidMount (){
      
        this.setCurrentDate();
    }


     onCancelClick = () => {

    }

    onSubmitClick = (event) =>{
        event.preventDefault();
        let newEvent = this.state.event;

        let eventData = {
            eventName : newEvent.eventTitle,
            startDate : Date.parse(`${newEvent.startDate} ${newEvent.startTime}`),
            endDate : Date.parse(`${newEvent.endDate} ${newEvent.endTime}`),
            repeatOpt_id : newEvent.repeat,
            location : newEvent.location,
            remindOpt_id : newEvent.remind,
            notes : newEvent.type,
            userId : this.state.userId
            
        };

        
        API.saveEvent(
            eventData
        ).then( (err) => {
            if (err){
                console.log(err);
            }
        }
        )
    }

    // componentDidUpdate(nextProps) {
    //     console.log("update");
    //     console.log(nextProps);
    //     if (nextProps.event !== this.props.event) {
    //         console.log("update2");
    //       this.setState({ event: nextProps.event.repeat })
    //     }
    //     console.log(this.state.event);
    // }

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
                            name = "eventTitle"                   
                            placeholder="New Event"
                            value = {this.state.event.eventTitle}                    
                            onChange = {this.handleInputChange}
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
                                name = "startDate"                                
                                value = {this.state.event.startDate}    
                                onChange = {this.handleInputChange}                                                                                            
                                required
                            />

                            <input
                                className = "form-control col-3"
                                id = "startTime"
                                name = "startTime"
                                type = "time"
                                value = {this.state.event.startTime}  
                                onChange = {this.handleInputChange}                      
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
                                name = "endDate"
                                type = "date"
                                value = {this.state.event.endDate}
                                onChange = {this.handleInputChange}
                                required
                            />

                            <input
                                className = "form-control col-3"
                                id = "endTime"
                                name = "endTime"
                                type = "time"
                                value = {this.state.event.endTime}
                                onChange = {this.handleInputChange}
                                required
                            />
                         </div>               
                    </div>

                    <div className = "row">
                         <div className = "form-group row">
                         <label htmlFor="repeat" className="col-sm-2 col-form-label">Repeat</label>
                             <Select
                              name = "repeat"
                              options = {this.state.repeatOption}
                              value = {this.state.event.repeat}                              
                              onChange = {this.handleInputChange}
                             
                             />
                            
                         </div>               
                    </div>
                    <div className =" form-group row">
                         <label htmlFor="location" className="col-sm-2 col-form-label">Location</label>
                            <input
                                className = " form-control col-8"
                                id = "location"
                                type = "text"                               
                                value = {this.state.event.location}
                                onChange = {this.handleInputChange}
                            />                        
                    </div>

                    <div className =" form-group row">
                         <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                            <textarea
                                className = " form-control col-8"
                                id = "notes"
                                type = "text"                                
                                value = {this.state.event.notes}
                                onChange = {this.handleInputChange}
                            />                        
                    </div>

                    <div className = "row">
                         <div className = "form-group row">
                         <label htmlFor="remind" className="col-sm-2 col-form-label">Remind</label>
                             <Select
                             options = {this.state.remindOption}
                             name = "remind" 
                             value = {this.state.event.remind}
                             onChange = {this.handleInputChange}/>
                            
                         </div>               
                    </div>

                    <div className = "row">
                         <div className = "form-group row">
                         <label htmlFor="Select" className="col-sm-2 col-form-label">Type</label>
                             <Select
                             options = {this.state.eventType}
                             />
                            
                         </div>               
                    </div>

                    <div className =" form-group row">
                         <label htmlFor="invites" className="col-sm-2 col-form-label">Invitees</label>
                            <input
                                className = " form-control col-8"
                                id = "invites"
                                type = "text"                            
                                
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