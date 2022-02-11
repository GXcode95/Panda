json.course do
  json.id @course.id
  json.date @course.date
  json.date_in_letter @course.date_in_letter
  json.max_subscriptions @course.max_subscriptions
  
  json.initiation_id @course.initiation_id
  json.structure_id @course.structure_id
  json.theme_id @course.theme.id
  json.subscribers @course.subscribers_ids
end