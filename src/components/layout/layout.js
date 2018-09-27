import React from 'react';
import './layout.css';

export default function Layout() {
  return (
    <div className="wrapper">
      <header className="top-header">
        <div className="header-search">
          <h1 className="title">Postmates</h1>
          <div>
            <input type="text" placeholder="Search for anything..." />
          </div>
        </div>
        <div className="user-profile">
          <a>Feed</a>
          <div>
            <img />
          </div>
        </div>
      </header>
      <div>
        <div>Banner Header</div>
        <div className="location-option-bar" />
        <main />
      </div>
    </div>
  );
}
