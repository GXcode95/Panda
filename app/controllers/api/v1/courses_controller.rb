class Api::V1::CoursesController < ApplicationController
  respond_to :json
  
  def index
    @courses = Course.all.order(date: :asc)
    @themes = Theme.all
    @structures = Structure.all
    @initiations = Initiation.all

    p "%"*100
    # p current_user.build
    p "%"*100
  end

end
