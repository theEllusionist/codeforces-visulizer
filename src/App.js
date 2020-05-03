import React from 'react';
import Navbar from "./Components/navbar";
import {BrowserRouter,Router} from "react-router-dom"
import Searchbar from "./Components/Searchbar";
import Axios from "axios";
import VerdictChart from "./Components/Charts/VerdictChart";
import LanguageChart from "./Components/Charts/LanguageChart";
import Tags from "./Components/Charts/Tags";
import Levels from "./Components/Charts/Levels";
import ProblemRating from "./Components/Charts/ProblemRating";
import HeatMap from "./Components/Charts/HeatMap";
import Contest from "./Components/contest";
class App extends React.Component{
    state = {
        search:"",
        data:[],
        user_data:[],
        error:false,
    };
    addSearch = (search)=> {
        const url = "https://codeforces.com/api/user.status?handle="+search;
        Axios.get(url)
            .then(res=>{
                // console.log(res.data.result)
                this.setState({
                    data:res.data.result,
                    search:search
                })

            })
            .catch(error=>{
                this.setState({
                    error:true
                })
                console.log(this.state.error)
            });
        Axios.get("https://codeforces.com/api/user.rating?handle="+search)
            .then(res=>{
                this.setState({
                    user_data:res.data.result
                })
            })

    };

    render() {

      return(
            <BrowserRouter >
                <div>
                    {/*<div className="container">*/}
                        <Navbar/>
                    {/*</div>*/}
                    <Searchbar addSearch={this.addSearch} />
                    {this.state.error&&
                        <div>
                            <p className="center">Couldn't find user. Network problem?</p>
                        </div>
                    }
                    <div className="row container">
                        <VerdictChart data={this.state.data} user={this.state.search} />
                    </div>
                    <div className="row container">
                        <LanguageChart data={this.state.data} user={this.state.search}/>
                    </div>
                    <div className="row container">
                        <div >
                            <Tags data={this.state.data} user={this.state.search}/>
                        </div>
                    </div>
                    <div className="row container">
                        <Levels data={this.state.data} user={this.state.search}/>
                    </div>
                    <div className="row container">
                        <ProblemRating data={this.state.data} user={this.state.search}/>
                    </div>
                    {/*<div className="row container">*/}
                    {/*   /!*<div className="col s12 z-depth-2" style={{marginTop:50,overflow:"scroll"}}>*!/*/}
                    {/*   <HeatMap data={this.state.data} user={this.state.search}/>*/}
                    {/*   /!*</div>*!/*/}
                    {/*</div>*/}
                    <div className="row container">
                        <Contest user={this.state.search} user_data={this.state.user_data} data={this.state.data}/>
                    </div>
                </div>
            </BrowserRouter>
  )
 }
};

export default App;
