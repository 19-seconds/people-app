class Api::V1::PeopleController < ApplicationController

  def index
    @people = Person.all
    render json: @people
  end

  def create
    @person = Person.new(name: params[:name], bio: params[:bio])
    @person.save
    render json: @person
  end

  def destroy
    @person = Person.find_by(id: params[:id])
    @person.destroy
    render json: @person
  end

end
