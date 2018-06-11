class Restaurant < ApplicationRecord
  has_many :reviews, dependent: :destroy

  validates :name, :cuisine, :accepts_tenbis, presence: true
  validates_inclusion_of :accepts_tenbis, in: [true, false]
  validates :name, uniqueness: true
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 3 }

  has_many :reviews

  def rating
    reviews.present? ? reviews.average(:rating) : "0"
  end
end
