import React from "react";
class Contest extends React.Component{

    render() {
        //contest
            var best = 1e10;
            var worst = -1e10;
            var maxUp = 0;
            var maxDown = 0;
            var bestCon = '';
            var worstCon = '';
            var maxUpCon = '';
            var maxDownCon = '';
            var tot = this.props.user_data.length;
            var con_url = 'https://codeforces.com/contest/';
            this.props.user_data.forEach(function(con) {
            // con is a contest
            if (con.rank < best) {
              best = con.rank;
              bestCon = con.contestId;
            }
            if (con.rank > worst) {
              worst = con.rank;
              worstCon = con.contestId;
            }
            var ch = con.newRating - con.oldRating;
            if (ch > maxUp) {
              maxUp = ch;
              maxUpCon = con.contestId;
            }
            if (ch < maxDown) {
              maxDown = ch;
              maxDownCon = con.contestId;
            }
            });
            // console.log(maxDownCon)
            //problems
            var problems = {};
            for (var i = this.props.data.length - 1; i >= 0; i--) {
                var sub = this.props.data[i];
                var problemId = sub.problem.contestId + '-' + sub.problem.index;
                if (problems[problemId] === undefined) {
                    // first submission of a problem
                    problems[problemId] = {
                        attempts: 1,
                        solved: 0 // We also want to save how many submission got AC, a better name would have been number_of_ac
                    };
                } else {
                    //we want to show how many time a problem was attempted by a user before getting first AC
                    if (problems[problemId].solved === 0) problems[problemId].attempts++;
                }

                if (sub.verdict === 'OK') {
                    problems[problemId].solved++;
                }
            }
                var tried = 0;
                var solved = 0;
                var maxAttempt = 0;
                var maxAttemptProblem = '';
                var maxAc = '';
                var maxAcProblem = '';
                var unsolved = [];
                var solvedWithOneSub = 0;
                for (var p in problems) {
                    tried++;
                    if (problems[p].solved > 0) solved++;
                    if (problems[p].solved === 0) unsolved.push(p);

                    if (problems[p].attempts > maxAttempt) {
                        maxAttempt = problems[p].attempts;
                        maxAttemptProblem = p;
                    }
                    if (problems[p].solved > maxAc) {
                        maxAc = problems[p].solved;
                        maxAcProblem = p;
                    }
                    if (problems[p].solved === problems[p].attempts) solvedWithOneSub++;
                }
                const unsolvedList =unsolved.map(p=>{
                    if(p!==undefined) {
                        return (
                            <div className="col s3 m2 l2"><a href={con_url+p.split('-')[0]+'/problem/'+p.split('-')[1]} target="_blank" style={{display:"inline-block"}}>
                                {p}
                            </a>
                            </div>
                        )
                    }
                })
        return(
            <div >
                {unsolved.length>0&&
                <div className="row z-depth-2" style={{padding:20}}>
                    <span style={{ color: "#393939",fontWeight: 500,fontSize: "20px",marginLeft:"50"}}>Unsolved</span>
                    {/*<div style={{width:"100%",height:"20px"}}></div>*/}
                    <div >{unsolvedList}</div>
                </div>
                }
                {this.props.data.length>0&&
                <div className="row">
                    <div className="col collection s12 m6 l6 z-depth-2" style={{borderRadius:"10px"}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Contest of</th>
                                    <th className="right">{this.props.user}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td>Number of contests</td>
                                    <td className="right">{tot}</td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td>Best rank</td>
                                    <td className="right">{best}<a href={con_url+bestCon} target="_blank">({bestCon})</a></td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td>Worst Rank</td>
                                    <td className="right">{worst}<a href={con_url+worstCon} target="_blank">({worstCon})</a></td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td>Max Up</td>
                                    <td className="right">{maxUp}<a href={con_url+maxUpCon} target="_blank">({maxUpCon})</a></td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td>Max Down</td>
                                    <td className="right">{maxDown}<a href={con_url+maxDownCon} target="_blank">({maxDownCon})</a></td>
                                </tr>
                                <tr>
                                <td style={{color:"white"}}>kajsdhka</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col collection s12 m6 l6 z-depth-2" style={{borderRadius:"10px"}}>
                        <table >
                            <thead>
                                <tr>
                                    <th>Some numbers about</th>
                                    <th className="right">{this.props.user}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td>Tried</td>
                                    <td className="right">{tried}</td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td>Solved</td>
                                    <td className="right">{solved}</td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td>Average attempts</td>
                                    <td className="right">{(this.props.data.length / solved).toFixed(2)}</td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td>Max attempts</td>
                                    <td className="right">{maxAttempt}<a href={con_url+maxAttemptProblem.split('-')[0]+'/problem/'+maxAttemptProblem.split('-')[1]} target="_blank">({maxAttemptProblem})</a></td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td>Solved with one submission</td>
                                    <td className="right">{solvedWithOneSub} ({solved ? ((solvedWithOneSub / solved) * 100).toFixed(2) : 0})</td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td>Max AC(s)</td>
                                    <td className="right">{maxAc}<a href={con_url+maxAcProblem.split('-')[0]+'/problem/'+maxAcProblem.split('-')[1]} target="_blank">({maxAcProblem})</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                }

            </div>
        )
    }

}
export default Contest