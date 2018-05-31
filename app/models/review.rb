class Review < ApplicationRecord
  belongs_to :restaurant
  validates :rating, presence: true, inclusion: 0..3
  attribute :reviewer, :string, default: 'anonymous'
end
