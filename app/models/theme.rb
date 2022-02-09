class Theme < ApplicationRecord
  has_many :initiations

  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
end
