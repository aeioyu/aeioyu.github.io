import members from '../constant/members';

interface IRawPosts {
  events: IRawEvent[]
}

interface IRawEvent {
  id: string
  series_id?: string
  remote_id: string
  subcalendar_id: number
  subcalendar_ids: number[]
  all_day: boolean
  rrule: string
  title: string
  who: string
  location: string
  notes: string
  version: string
  readonly: true
  tz?: string
  start_dt: string
  end_dt: string
  ristart_dt?: string
  rsstart_dt?: string
  creation_dt: string
  update_dt?: string
  delete_dt?: string
}

export function formatPosts(posts: IRawPosts) {
  const formatedMemberWithDayOff = members.map(member => {
    const dayOffs = posts?.events?.filter(post => post.title.includes(member)) || [];
    return {
      name: member,
      dayOffs: dayOffs
    }
  })
  console.log('formatedMemberWithDayOff', formatedMemberWithDayOff)
  // const formatedPosts = posts;
  return formatedMemberWithDayOff;
}