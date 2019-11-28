import React from "react";
import { Link } from "react-router-dom";

import Search from './Search';

function AlwaysTop() {

    return (
        <>
            <Link to="/">
                <button>HOME</button>
            </Link>
            <Link to="/cartlist">
                <button>장바구니</button>
            </Link>
            
            <h1>온라인 쇼핑몰</h1>
            <Search />
        </>
    );
}

export default AlwaysTop;