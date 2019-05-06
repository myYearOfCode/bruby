require 'rails_helper'
RSpec.describe GetRecipeController, type: :controller do

  feature 'pico accesses the getRecipe api endpoint' do
    # As a pico brewing machine
    # I want to get a recipe from the server
    # So that I can brew beer

    scenario 'send getRecipe api request' do
      get :index
      expect(response.body).to have_content('Preparing to Brew,')
    end

  end
end
