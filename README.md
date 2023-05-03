# Bookit 

The project is a travel plan brochure designed using React.js and Tailwind CSS. Enjoy :) This project is part of the #RoadMap challenge by [Jean Meira](https://github.com/JCDMeira)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Users will be able to view 3 different travel packages.
- Hover effects.
- Responsive page with mobile.

### Screenshot

![](https://github.com/carolmedici/bookit/blob/main/public/print.jpg)
![](https://github.com/carolmedici/bookit/blob/main/public/mobile-print.jpg)

### Links

- Solution URL: [https://github.com/carolmedici/bookit](https://github.com/carolmedici/bookit)
- Live Site URL: [https://bookit-sigma.vercel.app/](https://bookit-sigma.vercel.app/)

## My process

### Built with

- [Tailwind CSS] (https://tailwindcss.com/) 
- [React](https://reactjs.org/) - JS library


### What I learned

In this project, I learned how to use the Tailwind CSS framework and continue to improve my skills in React.js.

Check out some code: 



```js
const Item = ({ nameType, image, amount, description, backColor, id }) => {
    return (
      <div className='item'>
        <div className='header' style={{ backgroundColor: backColor }}>
          <h4 class="font-bold text-white text-center text-4xl p-2">{nameType}</h4>
          <img className="w-full max-h-60 rounded-t-lg" src={image} />
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
```


### Continued development

I will continue studying React library and Tailwind CSS

### Useful resources

- [React JS](https://legacy.reactjs.org/) - The library contains great documents and tutorials.
- [Tailwind CSS] (https://tailwindcss.com/) - It contains everything :D


## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)






