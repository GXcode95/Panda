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

  def self.search(params)
    queries = []
    queries << "collective = true" if params[:collective]
    if queries.any?
      queryString = ""
      queries.each_with_index do |query, i|
        queryString += query
        queryString += " AND " unless i === queries.length - 1
      end

      self.all.where(queryString).order(date: :asc) 
    else
      self.all.order(date: :asc)
    end
  end

end
