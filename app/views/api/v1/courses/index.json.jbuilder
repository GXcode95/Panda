json.courses @courses, :id, :collective, :reservation, :date, :max_subscriptions, :initiation_id, :structure_id
json.themes @themes, :id, :name, :color
json.structures @structures, :id, :name, :address
json.initiations @initiations, :id, :name, :level, :theme_id