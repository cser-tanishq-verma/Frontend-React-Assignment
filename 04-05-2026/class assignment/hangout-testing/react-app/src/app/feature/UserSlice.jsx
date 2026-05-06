import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export let fetchUser=createAsyncThunk("user-slice/fetchuser",async(data,thunkAPI)=>{
    try{
        let res = await fetch("https://api.github.com/users");
        let resData = await res.json();
        return resData;
    }
    catch(error){
        thunkAPI.rejectWithValue(error.message)
    }
})

export let getOneUser = createAsyncThunk("user-slice/getOneUser", async (data, thunkAPI) => {
    try{
        console.log(data);
        let res = await fetch( `https://api.github.com/users/${data}`);
        let resData = await res.json();
        return resData;
        
    }
    catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})

let userSlice=createSlice({
    name:"user-slice",
    initialState:{
        user:[],
        loading:false,
        count:0
    },
    reducers:{
        increaseCount:(state,action)=>{
            state.count=state.count+1;
        },
        decreaseCount:(state,action)=>{
            state.count=state.count-1;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(getOneUser.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
        .addCase(getOneUser.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        })
        .addCase(getOneUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.oneUser=action.payload;
        })
    }

})
export let {increaseCount,decreaseCount}=userSlice.actions;
export default userSlice.reducer;