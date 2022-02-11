class Api::V1::CoursesController < ApplicationController
  respond_to :json
  
  def index 
    if params[:userCourses]
      @courses = current_user.courses
    else
      @courses = Course.search(params)
    end
  end

  def show
    @course = Course.find(params[:id])
  end
  
end
