class Course < ApplicationRecord
  belongs_to :structure
  belongs_to :initiation

  has_many :subscriptions
  has_many :users, through: :subscriptions
  has_one :theme, through: :initiation

  def date_in_letter
    "le " + date.strftime("%A") + " " + date.day.to_s + " " + date.strftime("%B") +"."
  end

  def time 
     "#{date.strftime("%H")}H#{date.strftime("%M")}"
  end

end
