class Api::V1::InitiationsController < ApplicationController
  def index
    @initiations = Initiation.all
  end
end
