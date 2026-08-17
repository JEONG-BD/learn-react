
function CourseItem({title, description, thumbnail}) {
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
          <button className="btn">
              <i className="fa-solid fa-heart"></i>
          </button>
          <a className="btn" href="https://inf.run/JxyyT" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-link"></i>
          </a>
        </div>
      </article>
  )
}

export default CourseItem