import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KNwEfJduOcWdo5w88tVTVn02GgQNBZSjEvfw6SYTb0r5jlXXR6Lca50MkvNQku9RNowM9wXfNVSnSsu8nXt2Agh00EsobwHOy';

  const onToken = (token) => {
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card.',
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
