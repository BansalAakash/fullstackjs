var React = require('react');
var reactDom = require('react-dom');
import App from './components/App';

console.log('***INSIDE src/index.js')

reactDom.render(
	<App initialData={window.initialData}/>,
	document.getElementById('root')
	);