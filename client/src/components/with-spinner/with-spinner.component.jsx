import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const withSpinner =
  (WrappendComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappendComponent {...otherProps} />
    );
  };

export default withSpinner;
