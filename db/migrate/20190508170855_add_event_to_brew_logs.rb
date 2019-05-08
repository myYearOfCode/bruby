class AddEventToBrewLogs < ActiveRecord::Migration[5.2]
  def change
    add_column :brew_logs, :event, :string
  end
end
