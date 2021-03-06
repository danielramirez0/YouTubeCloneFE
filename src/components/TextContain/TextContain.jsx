import React, { Component } from 'react';

class TextContain extends Component {
    constructor(props){
        super (props);
        this.state = {
            text: ''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event, index) => {
        event.preventDefault();
        const reply = {
            text: this.state.text
        }
        await this.props.postReply(reply, index);
        this.setState({
            text: ''
        });
        this.props.getComments();
    }

    render() { 
        return (
            <div>
                <form onSubmit={(event)=> this.handleSubmit(event, this.props.index)}>
                    <div key={this.props.index}>
                        <label></label>
                        <input 
                        type="text" 
                        name="text" 
                        value={this.state.text}
                        onChange={(event)=> this.handleChange(event)} 
                        placeholder='Type Reply Here'
                        />
                        <button className='btn btn-primary' type = 'submit'>
                            Add {this.props.title.toLowerCase()}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default TextContain;