Feature: Get Users
  Scenario: Get Lists of users active on social networking site with different test data
    Given Get users API is up and Running on the server
    When  perform get users api call on social network site
    Then Validate the response code and response data for all users
