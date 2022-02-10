require "test_helper"

class InitiationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get initiations_index_url
    assert_response :success
  end
end
