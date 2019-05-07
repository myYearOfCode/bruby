class CreateBrewLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :brew_logs do |t|
      t.string :uid, null: false
      t.string :sesId, null: false
      t.integer :wort, null: false
      t.integer :therm, null: false
      t.string :step, null: false
      t.integer :error, null: false
      t.integer :sesType, null: false
      t.integer :timeLeft, null: false
      t.decimal :shutScale, null: false
      t.belongs_to :brew
      
      t.timestamps
    end
  end
end
