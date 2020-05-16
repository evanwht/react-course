var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/find?";

module.exports = {
    getTemp: function(location) {
        return axios.get(OPEN_WEATHER_MAP_URL, {
            params: {
                appid: '7ff7cbcc9c5857487a5e4eb1c75e6d0e',
                units: 'imperial',
                q: location
            }
        }).then(function(resp) {
            console.log(resp);
            if (resp.data.cod != 200 && resp.data.message != "accurate") {
                throw new Error('Error fetching data');
            } else if (resp.data.list.length == 0) {
                throw new Error('No city found for that location');
            } else {
                return resp.data.list[0].main.temp;
            }
        }, function(resp) {
            console.log(resp);
            throw new Error(resp.data.message);
        });
    }
}