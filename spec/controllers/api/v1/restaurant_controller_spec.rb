require 'rails_helper'

describe Api::V1::RestaurantsController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    let!(:asian_restaurants) { FactoryBot.create_list(:restaurant, 2) }
    it "returns all restaurants in the db" do
      get :index
      expect(JSON.parse(response.body).size).to eq(2)
    end
  end

  describe "GET #show" do
    let(:asian_restaurant) { FactoryBot.create(:restaurant, :asian) }
    it 'returns http success' do
      get :show, params: { id: asian_restaurant.id }
      expect(response).to have_http_status(:success)
    end

    it "returns the expected JSON response" do
      get :show, params: { id: asian_restaurant.id }
      expect(JSON.parse(response.body)['id']).to eq(asian_restaurant.id)
    end
  end

  describe "POST #create" do
    context "valid params" do
      let(:valid_params) { FactoryBot.attributes_for(:restaurant) }

      it "creates the restaurant and returns the 'created' status" do
        post :create, params: { restaurant: valid_params }

        expect(response).to have_http_status(:created)
        expect(Restaurant.last.name).to eq(valid_params[:name])
      end
    end

    context "invalid params" do
      let(:invalid_params_because_of_missing_name) { FactoryBot.attributes_for(:restaurant,:missing_name) }

      it "creates the restaurant and returns the 'created' status" do
        post :create, params: { restaurant: invalid_params_because_of_missing_name }
        expect(response).to have_http_status(:unprocessable_entity)
        expect(Restaurant.all.size).to eq(0)
      end
    end
  end

  describe "PUT #update" do
    let(:asian_restaurant) { FactoryBot.create(:restaurant, :asian) }
    context "valid params" do
      let(:valid_params) { { id: asian_restaurant.id, restaurant: { name: Faker::FunnyName.name } } }

      it "updates the restaurant and returns the 'no_content' status" do
        put :update, params: valid_params
        expect(response).to have_http_status(:no_content)
        expect(Restaurant.last.name).to eq(valid_params[:restaurant][:name])
      end
    end

    context "invalid params" do
      let(:invalid_params_because_of_missing_name) { { id: asian_restaurant.id, restaurant: { name: nil } } }

      it "fails to update the restaurant and returns the 'unprocessable_entity' status" do
        put :update, params: invalid_params_because_of_missing_name
        expect(response).to have_http_status(:unprocessable_entity)
        expect(Restaurant.last.name).to eq(asian_restaurant[:name])
      end
    end
  end

  describe "DELETE #destroy" do
    let(:asian_restaurant) { FactoryBot.create(:restaurant, :asian) }
    context "valid params" do
      let(:valid_params) { { id: asian_restaurant.id } }

      it "deletes the restaurant and returns the 'created' status" do
        delete :destroy, params: valid_params
        expect(response).to have_http_status(:no_content)
        expect(Restaurant.all.size).to eq(0)
      end
    end

    context "invalid params" do
      let(:invalid_params) { { id: 'not-a-real-id' } }
      # it "fails to delete the restaurant" do
      #   delete :destroy, params: invalid_params
      #   expect(Restaurant.last.name).to eq(asian_restaurant[:name])
      # end
    end

  end

end
