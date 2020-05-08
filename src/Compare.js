import React from "react";
import Axios from "axios";
import Searchbar2 from "./Components/Searchbar2";
import Print from "./Components/printProb";
class Compare extends React.Component{
    state= {
        search1:"",
        search2:"",
        data1:[],
        data2:[],
    };

    addSearch = (search1,search2)=>{
        Axios.get("https://codeforces.com/api/user.status?handle="+search1)
            .then(res=>{
                this.setState({
                    data1:res.data.result
                })
            });
        Axios.get("https://codeforces.com/api/user.status?handle="+search2)
            .then(res=>{
                this.setState({
                    data2:res.data.result
                })
            })
    };


    render() {
        const m1={};
        const m2={};
        for(var i=0;i<this.state.data2.length;i++){
            const sub = this.state.data2[i];
            const problemId = sub.problem.contestId + '-' + sub.problem.index;
            if(this.state.data2[i].verdict==="OK"){
                if(sub.problem.rating!==undefined)
                    m1[problemId] = sub.problem.rating
            }
        }
        for(i=0;i<this.state.data1.length;i++){
            const sub = this.state.data1[i];
            const problemId = sub.problem.contestId + '-' + sub.problem.index;
            if(this.state.data1[i].verdict==="OK"){
                if(m1[problemId]===undefined)
                    if(sub.problem.rating!==undefined)
                         m2[problemId]=sub.problem.rating
            }
        }
        const p = [];
        for (var x in m2) {
            p.push([parseInt(m2[x]), x]);
        }
        p.sort(sortFunction);

        function sortFunction(a, b) {
            if (a[0] === b[0]) {
                return 0;
            } else {
                return (a[0] < b[0]) ? -1 : 1;
            }
        }

        const prob=[];
        for(i=0;i<p.length;i++){
            let d={
                rating:p[i][0],
                id:p[i][1],
            };
            prob.push(d)
        }
        return(
            <div>
                <Searchbar2 addSearch={this.addSearch} />
                {prob.length>0&&
                <div className="container col s12">
                        <Print post={prob}/>
                 </div>
               }
            </div>
        )
    }
}
export default Compare