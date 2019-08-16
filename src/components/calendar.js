import React from "react";
import dateFns, { endOfToday } from "date-fns";

import events from "../events.json";
import "./calendar.css";

class Calendar extends React.Component {
  state = {
        events,
        currentMonth: new Date(),
        selectedDate: new Date(),
        
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";
    
    return (
        <div className="header row flex-middle">
          <div className="col col-start">
            <div className="icon" onClick={this.prevMonth}>
              chevron_left
            </div>
          </div>
          <div className="col col-center">
            <span>
              {dateFns.format(this.state.currentMonth, dateFormat)}
            </span>
          </div>
          <div className="col col-end" onClick={this.nextMonth}>
            <div className="icon">chevron_right</div>
          </div>
        </div>
      );
  }


  renderDays() {
    const dateFormat = "dddd";
    const days = [];
    let startDate = dateFns.startOfWeek(this.state.currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }


  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const eventList = this.state.events;

    

    const dateFormat = "D";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";


    while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        
        const cloneDay = day;
        const daysEvents = eventList.filter((eventOne) => eventOne.startDate === dateFns.format(cloneDay, "MM-DD-YYYY"));
        

        days.push(
        <div
            className={`col cell ${
            !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
        >
           
           <div className = "eventDiv">
                {daysEvents.map(today => (
                    <p className = "eventTag" id = {today.id} key = {today.key}>{today.name}</p>
                ))}
           </div>
           
            
            <span className="number">{formattedDate}</span>            
            <span className="bg">{formattedDate}</span>
           
        </div>
        );
        day = dateFns.addDays(day, 1);
    }
    rows.push(
        <div className="row" key={day}>
        {days}
        </div>
    );
    days = [];
    }

    return <div className="body">{rows}</div>;
  }


  onDateClick = day => {

    this.setState({
        selectedDate: day
      });
    //   console.log(this.state.selectedDate);
  }



  nextMonth = () => {
    this.setState({
        currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
      });
  }

  prevMonth = () => {
    this.setState({
        currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
      });
  }

  render() {
    return (
        <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;