Feature: Perform Patch operation on social networking site

  Scenario Outline: Perform Patch operation on social networking site with different test data
    Given Patch API is up and Running on the server
    When User perform a Patch api call on the social networking site using different test data <title><UserId>
    Then Validate response code <ResponseCode> and Response Data for each attribute
    Examples:
      | title                   | UserId   | ResponseCode|
      | "This is patch title"   | "1"      |200           |
      | ""                      | "1"      |400           |
      | "This is patch title"   | "123456789"|400         |
      | "This is patch title"   | "xxxxxxxx"  |400     |



