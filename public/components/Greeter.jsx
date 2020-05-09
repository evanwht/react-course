var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

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

module.exports = Greeter;