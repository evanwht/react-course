var React = require('react');

var WeatherForm = React.createClass({
    render: function() {
        return (
            <form>
                <div>
                    <input type="text" placeholder="Enter Location..."/>
                </div>
                <div>
                    <button type="submit">Get Weather</button>
                </div>
            </form>
        )
    }
})

module.exports = WeatherForm;