import { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionOverviewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
