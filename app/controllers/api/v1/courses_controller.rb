class Api::V1::CoursesController < ApplicationController
  respond_to :json
  
  def index 

    if params[:me]
      @courses = current_user.courses
    elsif params[:collectives]
      @courses = Course.collectives
    elsif params[:individuals]
      @courses = Course.individuals
    else 
      @courses = Course.all
    end
    
    @courses = @courses.search(params)
  end


  def show
    @course = Course.find(params[:id])
  end
  
end
