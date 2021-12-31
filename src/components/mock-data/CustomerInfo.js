import uuid from 'react-uuid'
const CustomerInfo = [
    { id : uuid(), firstName : "Eyuel", lastName : "Belay",  address :{ city : "Stockholm" , state : "Sweden" , postalCode : "12744" }  },
    { id : uuid(), firstName : "John", lastName : "Smith", address :{ city : "Vaxjo" , state : "Sweden" , postalCode : "16789" }},
    { id : uuid(), firstName : "Jafer", lastName : "Redi",  address :{ city : "Addis Ababa" , state : "Ethiopia " , postalCode : "25235" } },

]
export default CustomerInfo;