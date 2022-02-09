class CreateThemes < ActiveRecord::Migration[6.1]
  def change
    create_table :themes do |t|
      t.string :name
      t.string :description
      t.string :color, default: 'rgb(48,48,48)'
      t.timestamps
    end
  end
end
