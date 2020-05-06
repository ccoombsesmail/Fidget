class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :channel_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :follows, :channel_id
    add_index :follows, :user_id
  end
end
