module Api
  module V1
    class ReviewsController < ApplicationController
      before_action :set_review, only: [:show, :update, :destroy]
      before_action :set_restaurant, only: [:index, :create]

      # GET /restaurants/1/reviews
      def index
        render_success(data: @restaurant.reviews)
      end

      # GET /restaurants/1/reviews/2
      def show
        @review ? render_success(data: @review) : render_failure(reason: @review.errors)
      end

      # POST /restaurants/1/reviews
      def create
        @review = @restaurant.reviews.create(review_params)
        @review.save ? render_success(data: @review) : render_failure(reason: @review.errors)
      end

      # PATCH/PUT /restaurants/1/review/1
      def update
        @review.update(review_params) ? render_success(data: @review) : render_failure(reason: @review.errors)
      end

      # DELETE /restaurants/1/review/1
      def destroy
        @review.destroy ? render_success(data: :no_content) : render_failure(reason: @review.errors)
      end

      private
      def set_review
        @review = Review.find(params[:id])
      end

      def set_restaurant
        @restaurant = Restaurant.find(params[:restaurant_id])
      end

      def review_params
        params.require(:review).permit(:reviewer, :comment, :rating)
      end
    end
  end
end