import "./Item.css"

const Item = ({ nameType, image, amount, description, backColor, id }) => {
    return (
      <div className='item'>
        <div className='header' style={{ backgroundColor: backColor }}>
          <h4 class="font-bold text-white text-center text-4xl p-2">{nameType}</h4>
          <img className="w-full max-h-60 rounded-t-lg" src={image}/>
        </div>
        <div className='footer'>
            
            <p class="bg-slate-100 rounded-b-lg text-justify py-4 px-3  text-lg"> {description}</p>
          <h5 class="p-4 font-bold">Only: {amount}!</h5>
          <button class=" font-medium bg-slate-300 shadow-lg shadow-black-500/50 px-4 border-4 border-black border-double hover:bg-blue-400" onClick={() => BuyIt(id)}> Buy it
      </button>
        </div>
      </div>
    );
};

export default Item;