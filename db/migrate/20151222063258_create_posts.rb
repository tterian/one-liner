class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text    :content
      t.integer :user_id
      t.string  :location

      t.timestamps null: false
    end
  end
end
