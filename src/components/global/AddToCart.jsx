const AddToCart = ({ title='Add to cart' }) => {
  return (
    <>
      <button className='body-large bg-secondary px-5 py-2.5 rounded
      hover:bg-opacity-75 transition-opacity'>
        {title}
      </button>
    </>
  )
}

export default AddToCart
