module Api
  module V1
    class RestaurantsController < ApplicationController
      before_action :set_restaurant, only: [:show, :update, :destroy]

      # GET /restaurants
      def index
        render_success(data: Restaurant.all)
      end

      # GET /restaurants/1
      def show
        @restaurant ? render_success(data: @restaurant) : render_failure(reason: @restaurant.errors)
      end

      # POST /restaurants
      def create
        @restaurant = new_restaurant
        @restaurant.save ? render_success(data: @restaurant) : render_failure(reason: @restaurant.errors)
      end

      # PATCH/PUT /restaurants/1
      def update
        @restaurant.update(restaurant_params) ? render_success(data: @restaurant) : render_failure(reason: @restaurant.errors)
      end

      # DELETE /restaurants/1
      def destroy
        @restaurant.destroy ? render_success(data: :no_content) : render_failure(reason: @restaurant.errors)
      end

      private
      def set_restaurant
        @restaurant = Restaurant.find(params[:id])
      end
      def new_restaurant
        Restaurant.new(restaurant_params)
      end
      def restaurant_params
        params.require(:restaurant).permit(:name, :cuisine, :accepts_tenbis, :address, :max_delivery_time)
      end
    end
  end
end