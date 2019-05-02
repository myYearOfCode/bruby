class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.integer :s1Temp, null: false
      t.integer :s1Time, null: false
      t.integer :s2Temp, null: false
      t.integer :s2Time, null: false
      t.integer :s3Temp, null: false
      t.integer :s3Time, null: false
      t.integer :s4Temp, null: false
      t.integer :s4Time, null: false
      t.integer :s5Temp, null: false
      t.integer :s5Time, null: false
      t.integer :s6Temp, null: false
      t.integer :s6Time, null: false
      t.integer :s7Temp, null: false
      t.integer :s7Time, null: false
      t.integer :s8Temp, null: false
      t.integer :s8Time, null: false
      t.integer :s9Temp, null: false
      t.integer :s9Time, null: false
      t.integer :s10Temp, null: false
      t.integer :s10Time, null: false

      t.timestamps
    end
  end
end
