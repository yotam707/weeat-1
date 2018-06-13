module Api
  module V1
    class RestaurantsController < ApplicationController
      before_action :set_restaurant, only: [:show, :update, :destroy]

      # GET /restaurants
      def index
        @restaurants = Restaurant.all
        render json: @restaurants, status: :ok
      end

      # GET /restaurants/1
      def show
        render json: @restaurant, status: :ok
      end

      # POST /restaurants
      def create
        @restaurant = Restaurant.new(restaurant_params)
        if @restaurant.save
          render json: @restaurant, status: :created
        else
          render json: @restaurant.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /restaurants/1
      def update
        if @restaurant.update(restaurant_params)
          render json: @restaurant, status: :no_content
        else
          render json: @restaurant.errors, status: :unprocessable_entity
        end
      end

      # DELETE /restaurants/1
      def destroy
        if @restaurant.destroy
          render json: @restaurant, status: :no_content
        else
          render json: @restaurant.errors, status: :unprocessable_entity
        end
      end

      private

      def set_restaurant
        @restaurant = Restaurant.find(params[:id])
      end

      def restaurant_params
        params.require(:restaurant).permit(:name, :cuisine, :accepts_tenbis, :address, :max_delivery_time)
      end
    end
  end
end