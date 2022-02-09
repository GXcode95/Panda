class Initiation < ApplicationRecord
  belongs_to :theme
  enum level: [:beginner, :intermediate, :advance]
  
  validates :name, presence: true, uniqueness: true

  def level_fr
    # Remplacer avec la gem i18n
    case level
      when "beginner"
        "Débutant(e)"
      when "intermediate"
        "Initié(e)"
      when "advance"
        "Avancé(e)"
    end
  end
end
