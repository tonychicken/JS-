const gallery=[
  {
      img:"./img/gallery/gallery-1.jpg"
  },
  {
      img:"./img/gallery/gallery-2.jpg"
  },
  {
      img:"./img/gallery/gallery-3.jpg"
  },
  {
      img:"./img/gallery/gallery-4.jpg"
  },
  {
      img:"./img/gallery/gallery-5.jpg"
  },
  {
      img:"./img/gallery/gallery-6.jpg"
  },
  {
      img:"./img/gallery/gallery-7.jpg"
  },
  {
      img:"./img/gallery/gallery-8.jpg"
  },
  {
      img:"./img/gallery/gallery-9.jpg"
  },
  {
      img:"./img/gallery/gallery-10.jpg"
  },
  {
      img:"./img/gallery/gallery-11.jpg"
  },
  {
      img:"./img/gallery/gallery-12.jpg"
  },

];

const testimonials=[
  {   
      id:"1",
      img:"./img/customers/dave.jpg",
      name:"Dave Bryson",
      desc:"Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical",
  },
  {   
      id:"2",
      img:"./img/customers/ben.jpg",
      name:"Ben Hadley",
      desc:"The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
  },
  {   
      id:"3",
      img:"./img/customers/steve.jpg",
      name:"Steve Miller",
      desc:"Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
  },
  {   
      id:"4",
      img:"./img/customers/hannah.jpg",
      name:"Hannah Smitg",
      desc:"I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
  },
];


const galleryitem=document.querySelector('.gallery')
const testimonialsitem=document.querySelector('.testimonials')

window.addEventListener('DOMContentLoaded',()=>{
  displaygalleryItems(gallery);
});

window.addEventListener('DOMContentLoaded',()=>{
  displaytestimonialsItems(testimonials);
});



const displaygalleryItems=(gallery)=>{
  let displaygallery = gallery.map( (item)=> {
    console.log(item);
    
    return `          
    <figure class="gallery-item">
    <img
      src="${item.img}"
      alt="Photo of beautifully
    arranged food"
    />
  </figure>
  `
  })
  displaygallery=displaygallery.join("");
  galleryitem.innerHTML=displaygallery;
  console.log(displaygallery);
}




const displaytestimonialsItems=(testimonials)=>{
  let displaytestimonials = testimonials.map( (item)=> {
    console.log(item);
    
    return `          
    <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Dave Bryson"
                src="${item.img}"
              />
              <blockquote class="testimonial-text">
                ${item.desc}
              </blockquote>
              <p class="testimonial-name">&mdash; ${item.name}</p>
            </figure>
  `
  })
  displaytestimonials=displaytestimonials.join("");
  testimonialsitem.innerHTML=displaytestimonials;
  console.log(displaytestimonials);
}

