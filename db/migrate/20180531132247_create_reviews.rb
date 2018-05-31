class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :reviewer
      t.integer :rating
      t.text :comment
      t.belongs_to :restaurant, foreign_key: true

      t.timestamps
    end
  end
end
