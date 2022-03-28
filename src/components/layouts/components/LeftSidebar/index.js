import React from 'react';
import Avatar from '../../../Common/Avatar';
import { BsBasket } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function LeftSidebar() {
  const user = useSelector((state) => state.user.data);
  return (
    <div className="left-sidebar">
      <div>
        <Avatar size={64} image={user.avatar} />
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
