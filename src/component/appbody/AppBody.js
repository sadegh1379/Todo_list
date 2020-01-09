import React from 'react';
import './appbody.css';

function AppBody() {
    return (
    <div id="table" className="mx-auto">       
         <table className="table table-responsive table-bordered text-center">
            <tr>
                    <a href="#"><td><p>Add</p> <span className="fa fa-plus fa-3x"></span> </td></a>
                    <a href="#"><td><p>Buy</p> <span className="fa fa-shopping-bag fa-3x"></span> </td></a>
            </tr>
            <tr>
                    <a href="#"><td><p>Remove</p> <span className="fa fa-trash fa-3x"></span> </td></a>
                    <a href="#"><td><p>About</p> <span className="fa fa-question fa-3x"></span> </td></a>
            </tr>
        </table>
     
    </div>

    )
}

export default AppBody;
