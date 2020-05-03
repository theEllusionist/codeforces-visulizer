import React from "react";

class Searchbar extends React.Component{
    state= {
        search:null,
    };
    handleChange = (e)=>{
        this.setState({
            search:e.target.value
        });
    };
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addSearch(this.state.search)

    };
render() {
        return(
            <form className="row container input-field orange darken-1 z-depth-2" onSubmit={this.handleSubmit} style={{paddingBottom:20,borderRadius:"30px 15px"}}>
                <div className="col center s10 push-s1 white" style={{border:"2px solid white",marginTop:20,borderRadius:"10px",opacity:.7}} >
                    <input type="text" placeholder="Codeforces User Handle" onChange={this.handleChange}/>
                </div>
            </form>
        )
}

}
export default Searchbar