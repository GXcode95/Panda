json.courses @courses, :id, :collective, :reservation, :date, :max_subscriptions, :initiation_id, :structure_id, :subscriptions
json.themes @themes, :id, :name, :color
json.structures @structures, :id, :name, :address
json.initiations @initiations, :id, :name, :level, :theme_id

json.datax @courses do |course|
  json.id course.id
  json.collective course.collective
  json.reservation course.reservation
  json.date course.date
  json.date_in_later course.date_in_letter
  json.max_subscriptions course.max_subscriptions
  
  json.initiation_id course.initiation_id
  json.structure_id course.structure_id
  json.theme course.theme.id
  json.subscribers course.subscribers_ids
  
end