class CreateInitiations < ActiveRecord::Migration[6.1]
  def change
    create_table :initiations do |t|
      t.string :name
      t.integer :level #add default 0
      t.references :theme, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
