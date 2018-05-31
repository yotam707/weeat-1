class Restaurant < ApplicationRecord
  has_many :reviews, dependent: :destroy

  validates :name, :cuisine, :address, presence: true
  validates_inclusion_of :accepts_tenbis, in: [true, false]
  validates :name, uniqueness: true
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 3 }

  def rating
    reviews.present? ? reviews.average(:rating) : nil
  end
end
