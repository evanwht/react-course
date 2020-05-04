var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'Default jsx component'
        }
    },
    render: function() {
        var name = this.props.name;
        var message = this.props.message
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message + '!'}</p>
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