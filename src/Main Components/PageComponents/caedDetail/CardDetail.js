import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom'
import './CardDetail.css'

// export const CardDetail = () => {

//   let params = useParams();
//   let location = useLocation();
//   const {title} = location.state;

//   const[pDetail, setpDetail] = useState();

//   useEffect(() => {
//     getspDetail();
//   }, []);


//   const getspDetail = () =>{
//     console.log(params.cardid)
//     fetch(`https://jsonplaceholder.typicode.com/todos/${params.cardid}`)
//     .then((response) => response.json())
//     .then((json) => {
//       setpDetail(json);
//     });
//   }


export const CardDetail = ({ match }) => {
  const { cardid } = match.params;
  const { state: { title } } = useLocation();
  const [pDetail, setpDetail] = useState();

  useEffect(() => {
    const getspDetail = () => {
      console.log(cardid);
      fetch(`https://jsonplaceholder.typicode.com/todos/${cardid}`)
        .then((response) => response.json())
        .then((json) => {
          setpDetail(json);
        });
    };
    getspDetail();
  }, [cardid]);


  return (
    <>
    <div className='card-detail'>
      <div className='carddimg'></div>
      <div className='cardddes'>
      <h1>{pDetail?.id}</h1>
      <h1>{title}</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit malesuada erat, eget consequat nisl interdum vel. Ut et elit nec arcu luctus ultricies. Sed scelerisque leo ac tortor efficitur, id cursus ex congue. In id arcu sit amet turpis varius dapibus sed id justo. Cras interdum tristique arcu, sit amet aliquam nisi convallis nec. Nulla facilisi. Sed consectetur, justo non luctus elementum, ipsum purus bibendum mi, eu pharetra magna nulla nec sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer dignissim elit et mi tincidunt, nec venenatis lorem sollicitudin. Vivamus quis odio id leo ultrices scelerisque. Maecenas eu lobortis purus. Sed efficitur mauris sed enim sollicitudin, nec venenatis arcu scelerisque. In hac habitasse platea dictumst. Phasellus vitae sapien quis est efficitur sollicitudin. Phasellus vel dolor nec lacus congue cursus."</p>
      </div>
      <button>Add To Cart</button>
    </div>


      <h1>{pDetail?.id}</h1>
      <h1>{pDetail?.title}</h1>
      <h1>{title}</h1>

      
    </>
  )
}
