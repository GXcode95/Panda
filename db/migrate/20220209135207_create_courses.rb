class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.datetime :date
      t.references :structure, null: false, foreign_key: true
      t.integer :max_subscriptions
      t.boolean :collective
      t.boolean :reservation
      t.references :initiation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
