import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      telegram: author.telegram,
      twitter: author.twitter,
      github: author.github,
      vk: author.vk,
      rss: author.rss,
      email: author.email,
      steemit: author.steemit,
    };

    return (
      <div className="links">
        <ul className="links__list">
        {
          links.twitter ? <li className="links__list-item">
            <a href={`https://www.twitter.com/${links.twitter}`} target="_blank" >
              <i className="icon-twitter" />
            </a>
          </li> : null
        }
        {
          links.github ? <li className="links__list-item">
            <a href={`https://www.github.com/${links.github}`} target="_blank" >
              <i className="icon-github" />
            </a>
          </li> : null
        }
        {
          links.vk ? <li className="links__list-item">
            <a href={`https://www.vk.com/${links.vk}`} target="_blank" >
              <i className="icon-vkontakte" />
            </a>
          </li> : null
        }
        {/* </ul>
        <ul className="links__list"> */}
        {
          links.email ? <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li> : null
        }
        {
          links.telegram ? <li className="links__list-item">
            <a href={`telegram:${links.telegram}`}>
              <i className="icon-paper-plane" />
            </a>
          </li> : null
        }
        {/* </ul>
        <ul className="links__list"> */}
        {
          links.rss ? <li className="links__list-item">
            <a href={links.rss}>
              <i className="icon-rss" />
            </a>
          </li> : null
        }
        </ul>
      </div>
    );
  }
}

export default Links;
