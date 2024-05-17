import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const initialState={
 recipe_data: localStorage.getItem("data")? JSON.parse(localStorage.getItem("data")):[],
 loading:false,
 details:null
}

export const fetchdata=createAsyncThunk('recipeSlice/fetchdata', async()=>{
    try{
      const result=  await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
       localStorage.setItem('data',JSON.stringify(result.data))
      console.log(result.data,"ygyug")
      return result.data
    }
   catch(error){
    console.log(error.message)
   }
})

export const fetchRecipeDetails=createAsyncThunk('recipeSlice/fetchRecipeDetails', async(id)=>{
    try{
      const result=  await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      console.log(result.data,"details")
      return result.data
    }
   catch(error){
    console.log(error.message)
   }
})
const recipe_slice=createSlice({

    name:"recipeSlice",
    initialState,
   
    extraReducers:(builder)=>{
        builder.addCase(fetchdata.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchdata.fulfilled,(state,action)=>{
            state.loading=false
            state.recipe_data=action.payload
           
        })
        builder.addCase(fetchdata.rejected,(state,action)=>{
            state.loading=false
            state.recipe_data=action.payload
        })
        builder.addCase(fetchRecipeDetails.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchRecipeDetails.fulfilled,(state,action)=>{
            state.loading=false
            state.details=action.payload
           
        })
        builder.addCase(fetchRecipeDetails.rejected,(state,action)=>{
            state.loading=false
            state.recipe_data=action.payload
        })
    }
})


// export const  {login,logout}=authSlice.actions

export default recipe_slice.reducer