import './menu-item.styles.scss';
import { useHistory, useRouteMatch } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, linkUrl, size = '' }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};

export default MenuItem;
