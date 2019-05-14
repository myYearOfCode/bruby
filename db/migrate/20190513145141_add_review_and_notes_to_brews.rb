class AddReviewAndNotesToBrews < ActiveRecord::Migration[5.2]
  def change
      add_column :brews, :description, :string
      add_column :brews, :rating, :string
  end
end
