class CreateViews < ActiveRecord::Migration[5.2]
  def change
    create_table :views do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end
  end
end
