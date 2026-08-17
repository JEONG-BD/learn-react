import CourseItem from "./CourseItem"

export default function CourseListCard() {
  return (
    <div className="card">
      <div clasName="card__header">강의 목록</div>
      <div className="card__body">
        <div className="courses">
          <CourseItem/>
          <CourseItem/>
          <CourseItem/>
        </div>
      </div>
    </div>
  )
}

