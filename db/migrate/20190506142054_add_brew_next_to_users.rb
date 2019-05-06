class AddBrewNextToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :brewNext, :integer
  end
end
