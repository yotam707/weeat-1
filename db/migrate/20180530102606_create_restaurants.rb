class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine
      t.boolean :accepts_tenbis
      t.text :address
      t.time :max_delivery_time

      t.timestamps
    end
    add_index :restaurants, :name, unique: true
  end
end
