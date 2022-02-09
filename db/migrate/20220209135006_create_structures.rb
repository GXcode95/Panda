class CreateStructures < ActiveRecord::Migration[6.1]
  def change
    create_table :structures do |t|
      t.string :name
      t.string :address
      t.string :email, default: "centremultimedia@outlook.com"
      t.string :social_reason
      t.string :supervisor
      t.timestamps
    end
  end
end
