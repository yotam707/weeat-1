require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  describe 'restaurant with valid input' do
    let(:rest) { FactoryBot.create(:restaurant, :asian) }
    it 'should throw error for unique name' do
      expect { FactoryBot.create(:restaurant, name: rest.name) }.to raise_error(/duplicate key value/)
    end
  end
end
