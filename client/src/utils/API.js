import axios from "axios";

export default {
    saveEvent : function(eventData) {
        console.log("test");
        return axios.post("/api/events",eventData);
    }
};