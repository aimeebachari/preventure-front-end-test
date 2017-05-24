class Api::V1::GymsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    uri = URI("http://fe-test.preventure.com/api/v1/gyms/")
    response = Net::HTTP.get_response(uri)
    gyms = JSON.parse(response.body)

    @gym_results = gyms.select do |gym_hash|
      gym_hash["zip"] == params[:id]
    end

    #filter or select through to match zip based on params[:id] which is what goes into url client-side
    #convert back to json and send back to response

    render json: @gyms_results

  end

end
