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
        if (name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type='text' ref='name'/>
                <button>Set Other Name</button>
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
            name: this.props.name
        };
    },
    handleNewName: function(name) {
        // This will set state AND re-render the component
        this.setState({
            name: name
        });
    },
    render: function() {
        var name = this.state.name;
        var message = this.props.message
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName}/>
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