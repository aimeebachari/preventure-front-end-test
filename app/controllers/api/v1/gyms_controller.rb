class Api::V1::GymsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def get

  end

  def index
    uri = URI("http://fe-test.preventure.com/api/v1/gyms")

    response = Net::HTTP.get_response(uri)
    gyms_json = JSON.parse(response.body)

    @raw_gyms = gyms_json
    @raw_gyms_hash = {gyms: @raw_gyms}
    render json: @raw_gyms_hash
  end

  def show

  end

end
