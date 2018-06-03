module Api
  module V1
    class ReviewsController < ApplicationController
      before_action :set_review, only: [:show, :update, :destroy]
      before_action :set_restaurant, only: [:index, :create]

      # GET /restaurants/1/reviews
      def index
        @reviews = @restaurant.reviews
        render json: @reviews, status: :ok
      end

      # GET /restaurants/1/reviews/2
      def show
        render json: @review, status: :ok
      end

      # POST /restaurants/1/reviews
      def create
        @review = @restaurant.reviews.new(review_params)
        if @review.save
          render json: @review, status: :created
        else
          render json: @review.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /restaurants/1/review/1
      def update
        if @review.update(review_params)
          render json: @review, status: :no_content
        else
          render json: @review.errors, status: :unprocessable_entity
        end
      end

      # DELETE /restaurants/1/review/1
      def destroy
        if @review.destroy
          render json: :no_content, status: :no_content
        else
          render json: @review.errors, status: :unprocessable_entity
        end
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