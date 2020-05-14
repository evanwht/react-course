var React = require('react');
var {Link} = require('react-router');

var Example = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Here are a few exmaple places to try out:</p>
                <ol>
                    <li>
                        <Link to='/?location=Chicago,us'>Chicago, IL</Link>
                    </li>
                    <li>
                        <Link to='/?location=Rio,br'>Rio, Brazil</Link>
                    </li>
                </ol>
            </div>
        )
    }
})

module.exports = Example;