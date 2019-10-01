const { run } = require("react-snap");

run({
	destination: "build/screenshots",
	saveAs: "png",
	puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
	inlineCss: true,
	headless:false
});
