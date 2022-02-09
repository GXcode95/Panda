require "test_helper"

class PatatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @patate = patates(:one)
  end

  test "should get index" do
    get patates_url
    assert_response :success
  end

  test "should get new" do
    get new_patate_url
    assert_response :success
  end

  test "should create patate" do
    assert_difference('Patate.count') do
      post patates_url, params: { patate: { age: @patate.age, name: @patate.name } }
    end

    assert_redirected_to patate_url(Patate.last)
  end

  test "should show patate" do
    get patate_url(@patate)
    assert_response :success
  end

  test "should get edit" do
    get edit_patate_url(@patate)
    assert_response :success
  end

  test "should update patate" do
    patch patate_url(@patate), params: { patate: { age: @patate.age, name: @patate.name } }
    assert_redirected_to patate_url(@patate)
  end

  test "should destroy patate" do
    assert_difference('Patate.count', -1) do
      delete patate_url(@patate)
    end

    assert_redirected_to patates_url
  end
end
