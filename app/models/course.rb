class Course < ApplicationRecord
  belongs_to :structure
  belongs_to :initiation

  has_many :subscriptions
  has_many :users, through: :subscriptions
  has_one :theme, through: :initiation

  def date_in_letter
    date.strftime("%A") + " " + date.day.to_s + " " + date.strftime("%B") 
  end

  def time 
    "#{date.strftime("%H")}H#{date.strftime("%M")}"
  end

  def subscribers
    subscriptions.map do |subscription|
      subscription.user
    end
  end

  def subscribers_ids
    subscribers.map do |subscriber|
      subscriber.id
    end
  end

  def is_full?
    subscribers.length === self.max_subscriptions
  end


end
