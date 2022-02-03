import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

const PreviewCollection = ({ title, items, routeName }) => {
  const match = useRouteMatch();

  return (
    <div className="collection-preview">
      <h1 className="title">
        <Link to={`${match.path}/${routeName}`}>{title.toUpperCase()}</Link>
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;
