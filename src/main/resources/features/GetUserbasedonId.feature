Feature: Get Users based on Id
  Scenario Outline: Get details of user based on userId active on social networking site
    Given Get users API is up and Running on the server.
    When perform get users api call on social networking site based on <UserId>
    Then Validate response code <ResponseCode> and response data each attribute.
    Examples:
      |  UserId                 | ResponseCode |
      | "1"                     |  200         |
      |  "xxxxxxxxxxxx"         |  404         |
      |"1234567890987654398765" |  404         |