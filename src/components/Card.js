import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    {/* <form onSubmit={this.props.onSubmit}> */}
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="title" onChange={this.props.onChange} type="text" placeholder="Task title" value={this.props.title} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea name="description" onChange={this.props.onChange} placeholder="Task desc" className="materialize-textarea" value={this.props.description} />
                            </div>
                        </div>
                        <button type="submit" className="btn light-blue darken-4">Send</button>
                    {/* </form> */}
                </div>
            </div>
        )
    }
}

export default Card;