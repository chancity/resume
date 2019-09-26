var mv = require('mv');

mv('build/200.html', 'build/200.html.tmp', function(err) {
	// done. it tried fs.rename first, and then falls back to
	// piping the source file to the dest file and then unlinking
	// the source file.
});
