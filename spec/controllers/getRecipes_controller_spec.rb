require 'rails_helper'

RSpec.describe GetRecipeController, type: :controller do
  describe "GET response" do
    it "returns a valid recipe" do
      get :index
      expect(response.content_type).to eq("text/plain")
      expect(response.status).to eq(200)
      expect(response.body.split(',').length).to eq(55)
    end
  end
end
