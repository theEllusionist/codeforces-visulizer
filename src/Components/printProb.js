import React from "react";
class Print extends React.Component{
    render() {
        var con_url = 'https://codeforces.com/contest/';

        return(
            <div className="row">
                    <div className="col collection s12 l12 m12" style={{borderRadius:"10px"}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Problem</th>
                                    <th className="right">Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.post.map(p=>{
                                    const contest=p.id.split('-')[0];
                                    const problem =p.id.split('-')[1];
                                    return(
                                        <tr className="hoverable" style={{borderRadius:"10px"}} key={p.id}>
                                            <td ><a href={con_url+contest+'/problem/'+problem} target="_blank">{p.id}</a></td>
                                            <td className="right">{p.rating}</td>

                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }

}
export default Print