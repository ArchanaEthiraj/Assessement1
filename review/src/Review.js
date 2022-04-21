import React, { useState } from 'react'
import './Review.css'
function Review() {
  const review = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'WEB DEVELOPER',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'WEB DESIGNER',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'INTERN',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'THE BOSS',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  const [index, setIndex] = useState(0)
  const handleNext = () => {
    if (index === review.length - 1) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
  }
  const handlePrev = () => {
    setIndex(index === 0 ? review.length - 1 : index - 1)
  }
  const handleSuprice = () => {
    let randomValue = Math.floor(Math.random() * review.length);
    if (randomValue === index) {
      randomValue = ((randomValue + 1) > (review.length - 1)) ? 0 : randomValue + 1
    }
    setIndex(randomValue)
  }

  return (
    <div>
      <div className="text-center h1">Our Reviews</div>
      <div className='card w-50'>
        <div className='text-center'>
          <img src={review[index].image} alt="review" className='rounded-circle' height={100} width="100"></img></div>
        <div className='card-body'>
          <div className='card-title text-center'>{review[index].name}</div>
          <div className='text-center'>{review[index].job}</div>
          <div className='text-center'>{review[index].text}</div>
          <div className='text-center'>
            <button className='btn btn-outline-primary' onClick={handlePrev}>Previous</button>
            <button className='btn btn-outline-primary' onClick={handleNext}>Next</button></div>
          <div className='text-center'><button className='btn btn-primary' onClick={handleSuprice}>Suprise Me</button></div>
        </div>
      </div>
    </div>
  )
}

export default Review