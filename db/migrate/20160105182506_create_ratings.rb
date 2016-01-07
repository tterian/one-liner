class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.integer :score
      t.text    :comment
      t.integer :rater_id
      t.integer :ratee_id

      t.timestamps null: false
    end
    add_index :ratings, :ratee_id
    add_index :ratings, :rater_id
  end
end