import React, { Component } from 'react'
import {Grid, Input, Button } from '@material-ui/core'
import AppBarC from './components/AppBarC'
import axios from 'axios'
import './app.css'





export class App1 extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       search:"colombo",
       temp:"",
       list:[],
       country:"",
       main:"",
       des:""

    }
  }
  


componentDidMount(){

this.fetchData();

}




fetchData= async()=>{

const key="6fa19a6b840e2d8ede589918d1cd8946";

  
const res=await axios.get("https://api.openweathermap.org/data/2.5/weather?",{params:{
      q:this.state.search,
      appid:key

    }})

  
  this.setState({temp:res.data.main.temp,
    list:res.data,country:res.data.sys.country,
    main:res.data.weather[0].main,
    des:res.data.weather[0].description,
    search:""});

}

onChangeFunc  = (e)=>{
  this.setState({search:e.target.value});
}


    render() {

   
   
     console.log(this.state.temp)
     console.log(this.state.list)
     console.log(this.state.country)

    
  

  
        return (
            <Grid container>
              <Grid item><AppBarC></AppBarC></Grid>
              <Grid item className = "body">
                <img src="./images/weather.jpg" alt="Weather"></img>
                <div  className="body_center">
                  <Input type = "text" placeholder= "Enter City" value = {this.state.search} onChange={this.onChangeFunc} ></Input>
                  <Button variant="outlined" color="secondary"  onClick = {this.fetchData}> Search</Button>

                  <ul>
                    <li> <h6>{this.state.country}</h6> <p>{this.state.list.name}</p></li>
                    <li>{`Temperature :${Math.floor(this.state.temp-273)}C`}</li>
                    <li>{this.state.main}</li>
                    <li>{this.state.des}</li>

                  </ul>
              
                </div>
              </Grid>
           
            </Grid>
           )
    }
}

export default App1
