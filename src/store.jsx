import {createSlice,configureStore} from "@reduxjs/toolkit"
const formulaslice=createSlice({
    name:"formula",
    initialState:{value:{find:"",velocity:0,ivelocity:0,acceleration:0,displacement:0,time:0,formula:"",answer:0}},
    reducers:{
      findvelocity:(state,actions)=>{
        state.value=actions.payload
        if(state.value.displacement==0 || state.value.displacement==""){
           state.value.answer=state.value.ivelocity+(state.value.acceleration*state.value.time)
           state.value.formula="v=u+at";
        }

        else if (state.value.acceleration==0 || state.value.acceleration==""){
         state.value.answer=state.value.displacement-state.value.time-state.value.ivelocity
         state.value.formula="v=s-t-u"
        }
        else if(state.value.time==0 || state.value.time==""){
         state.value.answer=Math.sqrt((Math.pow(state.value.ivelocity,2))+(2*(state.value.acceleration*state.value.displacement)))
        state.value.formula="v^2=u^2-2as"
        }
      },
      findivelocity:(state,actions)=>{
        state.value=actions.payload
         if(state.value.displacement==0 || state.value.displacement==""){
            state.value.answer=state.value.velocity-(state.value.acceleration*state.value.time)
            state.value.formula="u=v-at";
         }

         else if (state.value.velocity==0 || state.value.velocity==""){
          state.value.answer=(state.value.displacement/state.value.time)-((state.value.acceleration*state.value.time)/2)
          state.value.formula="u=s/t-at/2"
         }
         else if(state.value.time==0 || state.value.time==""){
          state.value.answer=Math.sqrt((Math.pow(state.value.velocity,2))-(2*(state.value.acceleration*state.value.displacement)))
         state.value.formula="u^2=v^2-2as"
         }
         else if(state.value.acceleration==0 || state.value.acceleration==""){
          state.value.answer=state.value.displacement-state.value.time-state.value.velocity;
          state.value.formula="u=s-t-u";
         }

      },
      findacceleration:(state,actions)=>{
        state.value=actions.payload
        if(state.value.displacement==0 || state.value.displacement==""){
           state.value.answer=(state.value.ivelocity+state.value.velocity)/state.value.time
           state.value.formula="a=(v-u)/2";
        }

        else if (state.value.velocity==0 || state.value.velocity==""){
         state.value.answer=(state.value.displacement-state.value.ivelocity)*(2/Math.pow(state.value.time,2))
         state.value.formula="a=(s-u)*2/t^2"
        }
        else if(state.value.time==0 || state.value.time==""){
         state.value.answer=(Math.pow(state.value.ivelocity,2))+Math.pow(state.value.velocity,2)/(2*state.value.displacement)
        state.value.formula="a=(v^2-u^2)/2s"
        }
      },
      finddisplacment:(state,actions)=>{
        state.value=actions.payload
        if(state.value.acceleration==0 || state.value.acceleration==""){
           state.value.answer=((state.value.ivelocity+state.value.velocity)/2)+(state.value.time)
           state.value.formula="s=((u+v)/2)+t";
        }

        else if (state.value.velocity==0 || state.value.velocity==""){
         state.value.answer=state.value.ivelocity+(0.5*state.value.acceleration*Math.pow(state.value.time,2))
         state.value.formula="s=u+1/2*at^2"
        }
        else if(state.value.time==0 || state.value.time==""){
         state.value.answer=(Math.pow(state.value.velocity,2)-Math.pow(state.value.ivelocity,2))/(2*state.value.acceleration)
        state.value.formula="s=v^2+u^2/2a"
        }
      },
      findtime:(state,actions)=>{
        state.value=actions.payload
        if(state.value.acceleration==0 || state.value.acceleration==""){
           state.value.answer=state.value.time-((state.value.ivelocity+state.value.velocity)/2)
           state.value.formula="t=s-((u+v)/2)";
        }

        else if (state.value.velocity==0 || state.value.velocity==""){
         state.value.answer=Math.sqrt((state.value.displacement-state.value.ivelocity)*(2/state.value.acceleration))
         state.value.formula="t=(s-u)2/a"
        }
        else if(state.value.displacement==0 || state.value.displacement==""){
         state.value.answer=(state.value.velocity+state.value.ivelocity)/state.value.acceleration
        state.value.formula="t=(v-u)/a"
        }
      },
    }
})
export const {findvelocity,findivelocity,findacceleration,finddisplacment,findtime} =formulaslice.actions;
export const store=configureStore({
    reducer:{
        formula:formulaslice.reducer,
    }
})