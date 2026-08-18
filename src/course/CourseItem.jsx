// 1. 
// function HeartBtn({isFavorite=false}){
//   if(isFavorite){
//     return (
//         <button className="btn">
//           <img className="icon-heart" src="/img/heart-fill-icon.svg"/> 
//           <i className="fa-solid fa-heart"></i>
//         </button>
//     )
//   }
//   return (
//     <button className="btn">
//       <img className="icon-heart" src="/img/heart-icon.svg"/> 
//       <i className="fa-solid fa-heart"></i>
//     </button>
//   )
// }

// 2. 
// function HeartBtn({isFavorite = false}){
//   return (
//     <button className="btn">
//       {isFavorite ? (
//           <img className="icon-heart" src="/img/heart-fill-icon.svg"/>   
//         ) : (
//           <img className="icon-heart" src="/img/heart-icon.svg"/> 
//         )}
//     </button>
//     )
//   }

function HeartBtn({isFavorite = false}){
  return (
    <button className="btn">
          <img className="btn__img" src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"}/>     
    </button>
    )
  }

function LinkIconBtn({link}){
  return (
    <a className="btn" href="https://inf.run/JxyyT" target="_blank" rel="noreferrer">
        <img className="btn__img" src="/img/link-icon.svg" alt=""/>
    </a>

  )
}

function CourseItem({title, description, thumbnail, isFavorite, link}) {
  // const course = {
  //   title: '입문자를 위한, HTML&CSS 웹 개발 입문',
  //   description: '웹 개발에 필요한 기본 지식을 배웁니다. ',
  //   image: './img/htmlcss.png',
  //   isEmpty: false ,
  //   alt: '강의 이미지',
  // }

  // const title = '입문자를 위한, HTML&CSS 웹 개발 입문';
  // const description = '웹 개발에 필요한 기본 지식을 배웁니다.';
  // const image = './img/htmlcss.png';
  // const alt = '강의 이미지';
  const isEmpty = false ;
  
  if(isEmpty){
    return <p>강의가 없습니다.</p>
  }
  
  return (
      <article className="course">
        <img className="course__img" src={thumbnail} alt="강의 이미지" />
        <div className="course__body">
          <div className="course__title">{title}</div>
          <div className="course__description">{description}</div>
        </div>
        <div className="course__icons">
          <HeartBtn isFavorite={isFavorite}/>
          <i className="fa-solid fa-heart"></i>
          {link && <LinkIconBtn link={link}/>}
          
        </div>
      </article>
  )
}

export default CourseItem