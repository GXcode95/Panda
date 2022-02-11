json.courses @courses do |course|
  json.id course.id
  json.collective course.collective
  json.initiation_id course.initiation_id
  json.structure_id course.structure_id
  json.theme_id course.theme.id
end