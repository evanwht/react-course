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
    onButtonClick: function(e) {
        e.preventDefault();
        var nameRef = this.refs.name;
        var name = nameRef.value;
        nameRef.value = '';
        if (typeof name === 'string' && name.length > 0) {
            // This will set state AND re-render the component
            this.setState({
                name: name
            });
        }
    },
    render: function() {
        var name = this.state.name;
        var message = this.props.message
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message + '!'}</p>

                <form onSubmit={this.onButtonClick}>
                    <input type='text' ref='name'/>
                    <button>Set Name</button>
                </form>
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