import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
header.propTypes = {
    
};

function header(props) {
    return (
        <div class ="header">
        <button type="button" class="btn btn-outline-dark"><span style={{color:'red'}}>Creat New List</span></button>
        <div class = "">
            <input type="text" />
            <button
              class="btn-search"
              type="submit" style={{width:'200px'}} ><span class="glyphicon glyphicon-search">Sreach</span></button>
        </div>
        </div>
    );
}

export default header;