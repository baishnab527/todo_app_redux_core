
// create array form function thats retrun a all day;
export const day = Array.from({length : 31},(_, i) =>{
    return (31 - i);
});

// create a hour function by from array method;
export const hour = Array.from({length: 24}, (_, i) =>{
    return(24-i);
});

// create a munite function by form array method;
export const munite = Array.from({length: 60}, (_, i) =>{
    return(60 - i);
});

// create array form function thats retrun a all year;
export const years = Array.from({ length: 3000 - new Date().getFullYear() + 1 }, (_, i) => {
    return new Date().getFullYear() + i;
  });
  
// create a array month;
export const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

//   am pm declier by logic of time;
export const am_pm = ["Am", "Pm"];

//   create a action color function for dodo action;
  export const actonColor = (types) =>{
    switch(types){
        case "complite":
        return "green";

        case "pending":
            return "yellow";

        case "delete":
            return "red";

        default :
         return "red";
    }
  };

  

