class Api::V1::CoursesController < ApplicationController
  respond_to :json
  
  def index
    @courses = Course.all.order(date: :asc)
    @themes = Theme.all
    @structures = Structure.all
    @initiations = Initiation.all
    respond_to do |format|
      format.json 
    end

  end

end
