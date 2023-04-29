

const Item = ({ nameType, amount, description, backColor, id }) => {
    return (
      <div className='item'>
        <div className='header' style={{ backgroundColor: backColor }}>
          <h4>{nameType}</h4>
        </div>
        <div className='footer'>
            <p>{description}</p>
          <h5>{amount}</h5>
          <button onClick={() => BuyIt(id)}> Buy it
      </button>
        </div>
      </div>
    );
};

export default Item;