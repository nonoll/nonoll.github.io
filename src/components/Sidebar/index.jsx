import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Menu from '../Menu';
import Links from '../Links';
// import profilePic from '../../pages/photo.jpg';
import './style.scss';

class Sidebar extends React.Component {
  render() {
    // const { location } = this.props;
    const { menu } = this.props.siteMetadata;
    // const isHomePage = get(location, 'pathname', '/') === '/';

    // https://steemitimages.com/u/anpigon/avatar
    // console.log()

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        {/* 
        <Link to="/">
          <img
            src={`https://steemitimages.com/u/nonoll/avatar`}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={"nonoll"}
          />
        </Link>
         */}
        <h1 className="sidebar__author-title">
          <Link className="sidebar__author-title-link" to="/">{"nonoll"}</Link>
        </h1>
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">
            {authorBlock}
          </div>
          {menu &&
            <div>
              <Menu data={menu} />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Sidebar;
