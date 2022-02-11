class Api::V1::CoursesController < ApplicationController
  respond_to :json
  
  def index
    @courses = Course.all.order(date: :asc)
  end

  def show
    @course = Course.find(params[:id])
  end
  
end
