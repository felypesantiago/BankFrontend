import React, {useRef} from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch, Link } from 'react-router-dom';

import './Bank.css';

function toggleSideBar(sideBar, content) {
    sideBar.current.classList.toggle('active');
    content.current.classList.toggle('active');
}

function Bank() {
    const sideBar = useRef(null);
    const content = useRef(null);
    
    return (
        <Router>
            <div class="vertical-nav bg-white" id="sidebar" ref={sideBar}>
                <div class="py-4 px-3 mb-4 bg-light">
                    <div class="media d-flex align-items-center">
                        <div class="media-body">
                            <h4 class="m-0">Customer name</h4>
                            <p class="font-weight-light text-muted mb-0">Customer</p>
                        </div>
                    </div>
                </div>

            <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>

            <ul class="nav flex-column bg-white mb-0">
                <li class="nav-item">
                    <a href="#" class="nav-link text-dark font-italic bg-light">
                                <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                                Home
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-dark font-italic">
                                <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                                Profile
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-dark font-italic">
                                <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                                Accounts
                    </a>
                </li>
            </ul>
        </div>
        <div class="page-content p-5" id="content" ref={content}>
            <button onClick={() => toggleSideBar(sideBar, content)} type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4">
                <i class="fa fa-bars mr-2"></i>
                <small class="text-uppercase font-weight-bold">Toggle</small>
            </button>

            <h2 class="display-4">Welcome to the Bank</h2>
        </div>
    </Router>
    );
}


export default Bank;