class AddImageurlToRecipes < ActiveRecord::Migration[5.2]
  def change
      add_column :recipes, :profile_photo, :string
  end
end
