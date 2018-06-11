require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do

  let!(:asian_restaurant) { FactoryBot.create(:restaurant, :asian) }
  let!(:good_review) { FactoryBot.create(:review, :good, restaurant: asian_restaurant) }
  let!(:bad_review) { FactoryBot.create(:review, :bad, restaurant: asian_restaurant) }

  describe "GET #index" do

    it "returns http success" do
      get :index, params: { restaurant_id: asian_restaurant}
      expect(response).to have_http_status(:success)
    end

    it "returns all reviews of a restaurant" do
      get :index, params: { restaurant_id: asian_restaurant}
      expect(JSON.parse(response.body).size).to eq(2)
    end
  end

  describe "GET #show" do
    it 'returns http success' do
      get :show, params: { id: good_review.id, restaurant_id: asian_restaurant.id }
      expect(response).to have_http_status(:success)
    end

    it "returns the expected JSON response" do
      get :show, params: { id: good_review.id, restaurant_id: asian_restaurant.id }
      expect(JSON.parse(response.body)['id']).to eq(good_review.id)
    end
  end

  describe "POST #create" do
    context "valid params" do
      let(:valid_params) { FactoryBot.attributes_for(:review,:good) }

      it "creates the review and returns the 'created' status" do
        post :create, params: { review: valid_params, restaurant_id: asian_restaurant.id }

        expect(response).to have_http_status(:created)
        expect(Review.last.reviewer).to eq(valid_params[:reviewer])
      end
    end

    context "invalid params" do
      let(:invalid_params_because_of_missing_name) { FactoryBot.attributes_for(:review,:missing_rating) }

      it "creates the restaurant and returns the 'created' status" do
        post :create, params: { review: invalid_params_because_of_missing_name, restaurant_id: asian_restaurant.id }
        expect(response).to have_http_status(:unprocessable_entity)
        expect(Review.all.size).to eq(2)
      end
    end
  end

  describe "PUT #update" do
    context "valid params" do
      let(:valid_params) { { restaurant_id: asian_restaurant.id, id: bad_review.id, review: { reviewer: Faker::FunnyName.name } } }

      it "creates the restaurant and returns the 'not_content' status" do
        put :update, params: valid_params
        expect(response).to have_http_status(:no_content)
        expect(Review.last.reviewer).to eq(valid_params[:review][:reviewer])
      end
    end

    context "invalid params" do
      let(:invalid_params_because_of_missing_name) { { restaurant_id: asian_restaurant.id, id: bad_review.id, review: { reviewer: nil } } }

      it "fails to update the review and returns the 'unprocessable_entity' status" do
        put :update, params: invalid_params_because_of_missing_name
        expect(response).to have_http_status(:unprocessable_entity)
        expect(Review.last.reviewer).to eq(bad_review.reviewer)
      end
    end
  end

  describe "DELETE #destroy" do
    it "deletes the restaurant and returns the 'created' status" do
      delete :destroy, params: { restaurant_id: asian_restaurant.id, id: bad_review.id }
      expect(response).to have_http_status(:no_content)
      expect(Review.all.size).to eq(1)
    end
  end

end