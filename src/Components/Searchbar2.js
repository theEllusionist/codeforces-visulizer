import React from "react";

class Searchbar2 extends React.Component{
    state= {
        search1:"",
        search2:"",
    };
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    };
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addSearch(this.state.search1,this.state.search2)

    };
render() {
        return(
            <form className="row container input-field orange darken-1 z-depth-2" onSubmit={this.handleSubmit} style={{paddingBottom:20,borderRadius:"30px 15px"}}>
                <div className="col center s10 push-s1 white" style={{border:"2px solid white",marginTop:20,borderRadius:"10px",opacity:.7}} >
                    <input type="text" className="col s12 m6 l6" id="search1" placeholder="Codeforces User Handle1" onChange={this.handleChange}/>
                    <input type="text" className="col s12 m6 l6" id="search2" placeholder="Codeforces User Handle2" onChange={this.handleChange}/>
                    <button type="submit" className="waves-effect waves-light  btn">Compare</button>
                </div>
            </form>
        )
}

}
export default Searchbar2