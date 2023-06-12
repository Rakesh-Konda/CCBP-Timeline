// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineVew = props => {
  const {timelineItemsList} = props
  return (
    <div>
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          secondary: 'white',
        }}
      >
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard data={each} key={each.id} />
          }
          return <ProjectTimelineCard data={each} key={each.id} />
        })}
      </Chrono>
    </div>
  )
}
export default TimelineVew
