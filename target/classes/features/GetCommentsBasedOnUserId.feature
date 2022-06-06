Feature: Get List of comments based on userId on social networking site with different test data
  Scenario Outline: Get List of comments based on userId on social networking site with different test data
    Given Get Comment API is up and Running on the server
    When hit web services endpoint /posts/<userId>/comments basedon <UserId>
    Then Validate response code <ResponseCode> and response body of comments api.
    Examples:
      |  UserId                 | ResponseCode |
      | "1"                     |  200         |
      |  "xxxxxxxxxxxx"         |  400         |
      |"1234567890987654398765" |  404         |
      |"0"                      |  404         |
      |"-1"                     |  400         |
      |""                       |  400         |
