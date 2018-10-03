import React, { Component } from 'react';
import './layout.scss';

export default class Layout extends Component {
  imageURL = decodeURIComponent(
    'https%3A%2F%2Fbuyer-static.postmates.com%2Fdist%2Fprod%2Fcollection-food-header.e0b0ce23078053c1ad5f85554ee5ba9424e72f6d08f264430658529754c1f3912450e74427d947698c182a60d8b2b5c5a745eda9b0f952ebd78c99879ad46cb6.png'
  );

  render() {
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
          <div className="banner">
            <div className="banner-image-container">
              <img src={this.imageURL} />
            </div>
            <div className="banner-slogan">
              <h1>
                <span>You Crave.</span>
                <span>We Get it.</span>
              </h1>
            </div>
          </div>

          <div className="location-option-bar">
            <div>
              <button>Delivery</button>
              <span>or</span>
              <button>Pickup</button>
            </div>
            <div>
              <button>Select City</button>
            </div>
          </div>
          <main className="main-content">
            Restuarants Listing Goes here - Dynamic data
          </main>
        </div>
      </div>
    );
  }
}
