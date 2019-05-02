class CreateBrews < ActiveRecord::Migration[5.2]
  def change
    create_table :brews do |t|
      t.string :data
      t.timestamps

      t.belongs_to :user, null: false
      t.belongs_to :recipe, null: false
    end
  end
end
