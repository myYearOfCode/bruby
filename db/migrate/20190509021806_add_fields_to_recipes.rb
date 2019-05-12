class AddFieldsToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :description, :string
    add_column :recipes, :style, :string
    add_column :recipes, :yeast, :string
  end
end
