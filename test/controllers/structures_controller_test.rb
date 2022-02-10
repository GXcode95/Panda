require "test_helper"

class StructuresControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get structures_index_url
    assert_response :success
  end
end
