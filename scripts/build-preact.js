process.env.NODE_ENV = "production";

//const mv = require('mv');
const fs = require('fs');


// sync - not recommended

function replaceContentsSync(file, replacement) {
    try{
        const contents = fs.readFileSync(replacement);
        fs.writeFileSync(file, contents);
    } catch (e) {
        console.log(e)
    }
}

replaceContentsSync( 'node_modules/react-scripts/config/webpack.config.js', 'scripts/webpack.config.js');


require("react-scripts/scripts/build");

