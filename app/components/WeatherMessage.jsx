var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        var info = this.props.info;
        return (
            <h3>hello {info}</h3>
        )
    }
})

module.exports = WeatherMessage;