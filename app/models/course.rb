class Course < ApplicationRecord
  belongs_to :structure
  belongs_to :initiation

  has_many :subscriptions
  has_many :users, through: :subscriptions
  has_one :theme, through: :initiation

  scope :collectives, -> { where(collective: true) }
  scope :individuals, -> { where(collective: false) }

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
    sorted = self.order(date: :asc)

    if params[:themes]
      sorted = sorted.joins(:theme).where(theme: {id: params[:themes]})
    end

    if params[:structures]
      sorted = sorted.where(strucutre_id: params[:structure])
    end

    if params[:initiations]
      sorted = sorted.where(initiaiton_id: params[:initiations])
    end

    sorted
  end

end
