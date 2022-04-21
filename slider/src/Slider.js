import React, {useState} from 'react'
import './Slider.css'
import { GrPrevious, GrNext } from "react-icons/gr";
function Slider() {
    const people = [
        {
          id: 1,
          image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
          name: 'MARIA FERGUSON',
          title: 'Office Manager',
          quote:'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
        },
        {
          id: 2,
          image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
          name: 'JOHN DOE',
          title: 'Regular Guy',
          quote:'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
        },
        {
          id: 3,
          image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
          name: 'PETER SMITH',
          title: 'Product Designer',
          quote:'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
        },
        {
          id: 4,
          image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
          name: 'SUSAN ANDERSON',
          title: 'The Boss',
          quote:'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
        },
      ];
      const [index, setIndex] = useState(0)
      const handleNext = () => {
        if (index === people.length - 1) {
          setIndex(0)
        }
        else {
          setIndex(index + 1)
        }
      }
      const handlePrev = () => {
        setIndex(index === 0 ? people.length - 1 : index - 1)
      }
  return (
    <div>
        <div className="d-flex justify-content-center mt-5 h2"><div className='color'>/</div><div className='title mx-2'>Reviews</div></div>
       <div className='text-center'>
          <img src={people[index].image} alt="review" className='rounded-circle mt-5 image shadow-lg bg-white rounded' height={120} width="120"></img></div>
       <div className='color text-center mt-3'>{people[index].name}</div>
       <div className='titles text-center mt-1'>{people[index].title}</div>
       <div className='quote text-center mt-3'>{people[index].quote}</div>
       <div className='d-flex justify-content-center'>
           <div><GrPrevious onClick={handlePrev}></GrPrevious></div>
           <div className='ms-5'><GrNext onClick={handleNext} className="me-3"></GrNext></div>
       </div>
    </div>
  )
}

export default Slider