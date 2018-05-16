//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import Layout from './Layout.jsx';




const Card = props => ( <div className="card border-success mb-3">
    <div className="card-header bg-transparent border-success">Header</div>
    <div className="card-body text-success">
        <h5 className="card-title">Success card title</h5>
        <p className="card-text">{"Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
    </div>
    <div className="card-footer bg-transparent border-success">Footer</div>
</div>
);


//render your react application
ReactDOM.render(
    <Card />,
    document.querySelector('#app')
);