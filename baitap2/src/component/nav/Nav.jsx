import React from 'react';
import './nav.css';
function Nav(props) {
    return (
        <div class = "nav">
            <button type="button" class="btn btn-secondary btn-lg btn-block" style={{margin:'20px'}}>Click</button>
            <button type="button" class="btn btn-secondary btn-lg btn-block" style={{margin:'20px'}}>Click</button>
            <button type="button" class="btn btn-secondary btn-lg btn-block" style={{margin:'20px'}}>Click</button>
            <button type="button" class="btn btn-secondary btn-lg btn-block" style={{margin:'20px'}}>Click</button>
        </div>
    );
}

export default Nav;