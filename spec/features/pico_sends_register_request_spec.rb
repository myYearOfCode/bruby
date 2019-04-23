require 'rails_helper'
RSpec.describe RegisterController, type: :controller do

  feature 'pico accesses the Register api endpoint' do
    # As a pico brewing machine
    # I want the server to verify I am registered
    # So that I can continue brewing

    scenario 'send register api request' do
      get :index
      expect(response.body).to have_content('#T#')
    end

  end
end
