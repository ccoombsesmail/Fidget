class AddChannelNameToChannels < ActiveRecord::Migration[5.2]
  def change
      add_column :channels, :channel_name, :string, null: false
  end
end
