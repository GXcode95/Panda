class Subscription < ApplicationRecord
  belongs_to :user
  belongs_to :course

  validates :user_id, presence: true
  validates :course_id, presence: true
  validate :is_already_subscribed  
  validate :is_course_full


  def is_already_subscribed()
    if Subscription.where(user_id: user_id, course_id: course_id).any?
      errors.add "Erreur:", "Vous êtes déja inscrit à ce cours."
    end
  end


  # Validations

  def is_course_full
    errors.add :max_subscriptions, "Plus de places disponible." if course.is_full?
  end
end
