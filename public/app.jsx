var GreeterMessage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <p>{this.props.message + '!'}</p>
            </div>
        );
    }
});
var GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        var updates = {};
        
        if (name.length > 0) {
            updates.name = name;
            this.refs.name.value = '';
        }
        if (message.length > 0) {
            updates.message = message;
            this.refs.message.value = '';
        }
        this.props.onNewData(updates);
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type='text' ref='name' placeholder='Enter Name'/>
                </div>
                <div>
                    <textarea ref='message' placeholder='Enter Message'/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
});
var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'Default jsx component'
        }
    },
    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewData: function(data) {
        this.setState(data);
    },
    render: function() {
        var name = this.state.name;
        var message = this.state.message
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

var myName = 'Evan';
var myMessage = 'New variable message';

ReactDOM.render(
    <Greeter name={myName} message={myMessage}/>,
    document.getElementById('app')
);