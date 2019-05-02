class AddHardwareIdToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :hardware_id, :string
  end
end
