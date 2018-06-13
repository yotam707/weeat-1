class Review < ApplicationRecord
  validates :restaurant_id, :rating, :reviewer, presence: true
  validates :rating, inclusion: 0..3
  attribute :reviewer, :string, default: 'anonymous'
  belongs_to :restaurant
end
