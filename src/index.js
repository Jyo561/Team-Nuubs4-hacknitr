import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';
function Greeting() {
	return (
		<section className="booklist">
			<Person />
			<Person />
	    
		</section>
	);
}
const Person = () => {
	return (
		<article>
			<Image />
			<Author />
		</article>
	);
};
const Image = () => (
	<img
		src="https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_SL1500_.jpg"
		alt=""
		width="100px"
	/>
);
const Author = () => <h1 style={{color:"#FF99EE"}}>Jess Madock</h1>;

ReactDOM.render(<Greeting />, document.getElementById('root'));
