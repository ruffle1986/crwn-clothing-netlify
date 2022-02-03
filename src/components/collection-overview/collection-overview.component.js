import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../preview-collection/preview-collection.component';
import './collection-overview.styles.scss';

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
