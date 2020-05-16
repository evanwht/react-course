var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This was built following the <a href="https://www.udemy.com/course/the-complete-react-web-app-developer-course/">Complete React Developer Course</a> on Udemy</p>
            <p>View the code on <a href="https://github.com/evanwht1/react-course">github</a>.</p>
            <p>Tools used:</p>
            <uil>
                <li><a href="https://reactjs.org/">React</a></li>
                <li><a href="https://get.foundation/index.html">Foundation</a></li>
                <li><a href="https://openweathermap.org/">OpenWeatherMap.org</a></li>
                <li><a href="https://babeljs.io/">Babel</a></li>
                <li><a href="https://webpack.js.org/">Webpack</a></li>
                <li><a href="https://www.heroku.com/">Heroku</a></li>
            </uil>
        </div>
    )
};

module.exports = About;