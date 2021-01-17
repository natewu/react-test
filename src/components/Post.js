import React, { Component } from 'react'

export class Post extends Component {
    state = {
        username: "",
        text: ""
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.post(this.state.text, this.state.username);
        this.setState({text: "", username: ""});
    }
    onChange = (e) => this.setState({text: e.target.value });
    setUsername = (e) => {
        this.setState({username: e.target.value});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:"flex"}}>
                <input type="text" name="username" value={this.state.username} onChange={this.setUsername}/>
                <input type="text" name="text" style={{flex:"10", padding:"15px"}} value={this.state.text} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn" style={{flex:"1"}}/>
            </form>
        )
    }
}

export default Post
