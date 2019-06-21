import React, { Component } from 'react';
//import App from '../app/App';

class TableCard extends Component {
    render() {
        return (
            <table>
                <thead>
                    <th>Title</th>
                    <th>description</th>
                </thead>
                <tbody>
                    {
                        this.props.data.map(task => {
                            return (
                                <tr key={task._id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>
                                        <button className="btn light-blue darken-4" style={{ margin: '4px' }} onClick={() => {
                                            this.props.edit(task._id);
                                           // App.editTask(task._id);
                                        }}>
                                            <i className="material-icons">edit</i>
                                        </button>
                                        <button className="btn light-blue darken-4" onClick={() => {
                                            this.props.delete(task._id);
                                            //App.deleteTask(task._id);
                                        }}>
                                            <i className="material-icons">delete</i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
export default TableCard;