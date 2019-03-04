const initialState = {
    unit:'C',
    curCity: '',
    condition:{
        city:'Brisbane, Au',
        humidity: 62,
        windSpeed: 9,
        windDirection: 'NS',
        temp:{C:26, F:70}
    },
    forecast:[
        {
            day:'Sat',
            time: '19:00',
            high: {C:28,F:90},
            low:{C:15,F:78}
        },
        {
            day:'Sun',
            time: '20:00',
            high: {C:29,F:91},
            low: {C:16,F:79}
        },
        {
            day:'Mon',
            time: '21:00',
            high: {C:30,F:92},
            low: {C:17,F:80}
        }
    ]

    
};

const weatherReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return state;

    }
}

export default weatherReducer;