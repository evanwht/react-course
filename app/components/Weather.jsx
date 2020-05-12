var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({isLoading: true});
        OpenWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                isLoading: false,
                location: location,
                temp: temp
            })
        }, function(errorMessage) {
            that.setState({
                isLoading: false,
                location: location,
                temp: null
            });
            console.log(errorMessage);
        });
    },
    render: function() {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            } else if (location) {
                return <h3>No Location found for {location}</h3>
            }
        }

        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
})

module.exports = Weather;