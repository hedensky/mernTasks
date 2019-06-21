import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import TableCard from '../components/TableCard';

class App extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            tasks: [],
            _id: ''
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        this.fetchTask();
    }

    fetchTask() {
        fetch('api/tasks')
            .then(res => res.json())
            .then(data => {
                this.setState({ tasks: data });
            });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

    }

    addTask(e) {
        e.preventDefault();
        if (!this.state._id) {

            fetch('api/tasks', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    M.toast({ html: 'Task Saved' });
                    this.setState({ title: '', description: '', _id: '' });
                    this.fetchTask();
                })
                .catch(err => console.error(err));
        }
        else {
            fetch(`api/tasks/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    M.toast({ html: 'Task Updated' });
                    this.setState({ title: '', description: '', _id: '' });
                    this.fetchTask();
                })
        }
    }

    deleteTask(id) {
        fetch(`api/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                this.fetchTask();
                M.toast({ html: 'Task Deleted' });
            });
    }

    editTask(id) {

        fetch(`api/tasks/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    title: data.title,
                    description: data.description,
                    _id: data._id
                })
            })
    }

    render() {
        return (
            <div>
                <Navigation titulo="MERN" />
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <form onSubmit={this.addTask}>
                                <Card onChange={this.handleChange} title={this.state.title} description={this.state.description} />
                            </form>
                        </div>
                        <div className="col s7">
                            {/* <table>
                                <thead>
                                    <th>Title</th>
                                    <th>description</th>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task => {
                                            return (
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button className="btn light-blue darken-4" style={{ margin: '4px' }} onClick={() => {
                                                            this.editTask(task._id);
                                                        }}>
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                        <button className="btn light-blue darken-4" onClick={() => { this.deleteTask(task._id) }}>
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table> */}

                            <TableCard data={this.state.tasks} edit={this.editTask} delete={this.deleteTask}></TableCard>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;