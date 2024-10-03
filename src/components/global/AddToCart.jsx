const AddToCart = ({ title = "Add to cart", price }) => {
  return (
    <>
      {price ? (
        <button
          className="body-large bg-secondary px-5 py-2.5 rounded
      hover:bg-opacity-75 transition-opacity"
        >
          {title}
        </button>
      ) : (
        <button
          className="heading-small bg-accent-green px-5 py-2.5 rounded text-bg-main hover:bg-opacity-75 transition-opacity"
        >
          Play Now
        </button>
      )}
    </>
  );
};

export default AddToCart;
