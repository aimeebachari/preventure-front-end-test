class Api::V1::GymsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    uri = URI("http://fe-test.preventure.com/api/v1/gyms/")
    response = Net::HTTP.get_response(uri)
    gyms = JSON.parse(response.body)

    @gym_results = gyms.select do |gym_hash|
      gym_hash["zip"] == params[:id] || gym_hash["city"] == params[:id]
    end

    render json: @gym_results
  end
end
