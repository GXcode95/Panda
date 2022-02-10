class Api::V1::StructuresController < ApplicationController
  def index
    @structures = Structure.all
  end
end
