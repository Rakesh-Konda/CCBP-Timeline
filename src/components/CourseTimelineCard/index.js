// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  console.log(data)

  return (
    <div className="div">
      <div key={data.id}>
        <div className="cen">
          <h1>{data.courseTitle}</h1>
          <div className="ic">
            <AiFillClockCircle className="icon" />
            <p>{data.duration}</p>
          </div>
        </div>
        <p>{data.description}</p>
        <ul className="ul">
          {data.tagsList.map(hlo => (
            <p key={hlo.id} className="li">
              {hlo.name}
            </p>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CourseTimelineCard
