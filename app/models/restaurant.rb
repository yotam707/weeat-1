class Restaurant < ApplicationRecord
  validates :name, :cuisine, :address, presence: true
  validates_inclusion_of :accepts_tenbis, in: [true, false]
  validates :name, uniqueness: true
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 3 }
end
