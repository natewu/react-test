import React, { Component } from 'react'

export class Post extends Component {
    state = {
        username: "",
        text: ""
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.post(this.state.text);
        this.setState({text: ""});
    }
    onChange = (e) => this.setState({text: e.target.value })
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:"flex"}}>
                <input type="text" name="username" onChange={this.onChange}/>
                <input type="text" name="text" style={{flex:"10", padding:"15px"}} value={this.state.text} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn" style={{flex:"1"}}/>
            </form>
        )
    }
}

export default Post
