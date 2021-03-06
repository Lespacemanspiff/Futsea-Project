class HomeController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.json do
        term = params[:term]
        if term.present?
          results = Location.search(term)
        else
          results = []
        end

        render json: results

       end
    end
      @locations = Location.all
      @events = Event.all
  end
end
