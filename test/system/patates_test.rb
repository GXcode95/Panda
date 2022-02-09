require "application_system_test_case"

class PatatesTest < ApplicationSystemTestCase
  setup do
    @patate = patates(:one)
  end

  test "visiting the index" do
    visit patates_url
    assert_selector "h1", text: "Patates"
  end

  test "creating a Patate" do
    visit patates_url
    click_on "New Patate"

    fill_in "Age", with: @patate.age
    fill_in "Name", with: @patate.name
    click_on "Create Patate"

    assert_text "Patate was successfully created"
    click_on "Back"
  end

  test "updating a Patate" do
    visit patates_url
    click_on "Edit", match: :first

    fill_in "Age", with: @patate.age
    fill_in "Name", with: @patate.name
    click_on "Update Patate"

    assert_text "Patate was successfully updated"
    click_on "Back"
  end

  test "destroying a Patate" do
    visit patates_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Patate was successfully destroyed"
  end
end
