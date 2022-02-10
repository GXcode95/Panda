class Subscription < ApplicationRecord
  belongs_to :user
  belongs_to :course

  validates :user_id, presence: true
  validates :course_id, presence: true
  validate :already_subscribed  


  def already_subscribed()
    if Subscription.where(user_id: self.user_id, course_id: self.course_id).any?
      self.errors.add "Erreur:", "Vous êtes déja inscrit à ce cours."
    end
  end

end
