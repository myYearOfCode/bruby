class AddBrewNextNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :brewNextName, :string
  end
end
