

import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent =
{
   _id: new Date().getTime(),
   bgColor: '#fafafa',
   end: addHours( new Date(), 2 ),
   notes: 'Buy a cake',
   start: new Date(),
   title: 'Boss birthday',
   user: {
       _id: 1,
       name: 'Javier',
   }  
}

   export const calendarSlice = createSlice({
      name: 'calendar',
      initialState: {
         events: [ tempEvent ],
         activeEvent: null,
      },
      reducers: {
        onSetActiveEvent: ( state, { payload }) => {
            state.activeEvent = payload;
        }
   }
});

export const { 
   onSetActiveEvent,
} = calendarSlice.actions;