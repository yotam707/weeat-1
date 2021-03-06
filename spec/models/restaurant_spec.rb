require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  describe 'restaurant with valid input' do
    let(:asian_restaurant) { FactoryBot.create(:restaurant, :asian) }
    it 'should throw error for unique name' do
      expect { FactoryBot.create(:restaurant, name: asian_restaurant.name) }.to raise_error(/Name has already been taken/)
    end
  end
end
