json.subscriptions @subscriptions do |subscription|
  json.id subscription.id
  json.course_id subscription.course_id
  json.date subscription.course.date
  json.date_in_letter subscription.course.date_in_letter
  json.theme_id subscription.course.theme.id
end