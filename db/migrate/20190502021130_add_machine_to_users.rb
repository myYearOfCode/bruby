class AddMachineToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :machine, :string
  end
end
