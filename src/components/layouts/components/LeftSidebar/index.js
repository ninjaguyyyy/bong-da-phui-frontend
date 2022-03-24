import React from 'react';
import Avatar from '../../../Common/Avatar';
import { BsBasket } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div>
        <Avatar />
        <div className="sidebar-items">
          <Link to="/marketplace1" className="sidebar-item ">
            <BsBasket size={25} color="#adafca" />
            <span>Marketplace 1</span>
          </Link>

          <Link to="/marketplace" className="sidebar-item active">
            <BsBasket size={25} color="#adafca" />
            <span>Marketplace</span>
          </Link>

          <Link to="/marketplace" className="sidebar-item ">
            <BsBasket size={25} color="#adafca" />
            <span>Marketplace</span>
          </Link>

          <Link to="/marketplace" className="sidebar-item ">
            <BsBasket size={25} color="#adafca" />
            <span>Marketplace</span>
          </Link>

          <Link to="/marketplace" className="sidebar-item ">
            <BsBasket size={25} color="#adafca" />
            <span>Marketplace</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
