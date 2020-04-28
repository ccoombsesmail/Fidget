class CreateMessages < ActiveRecord::Migration[5.2]

  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.integer :vod_id
      t.string :body, null: false
      t.timestamps
    end

    add_index :messages, :user_id
    add_index :messages, :vod_id
    
  end
end
