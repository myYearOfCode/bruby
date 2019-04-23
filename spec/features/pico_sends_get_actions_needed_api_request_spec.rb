require 'rails_helper'
RSpec.describe GetActionsNeededController, type: :controller do

  feature 'pico accesses the GetActionsNeeded api endpoint' do
    # As a pico brewing machine
    # I want the server to check if any actions are needed
    # So that I can do them

    scenario 'send getActionsNeeded api request' do
      get :index
      expect(response.body).to have_content('##')
    end

  end
end
