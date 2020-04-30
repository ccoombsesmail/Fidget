class AddEmailToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string, null: false
    add_column :users, :dob, :date, null: false
  end
end
