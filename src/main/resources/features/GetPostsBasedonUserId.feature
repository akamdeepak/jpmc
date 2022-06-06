Feature: Get Post details based on UserId
  Scenario Outline: Get details of posts from social networking site based on userId.
    Given Get posts API is up and Running on the server
    When hit the api through "posts" endpoint with variable <UserId>
    Then Validate the response code <ResponseCode> and response data
    Examples:
      |  UserId           | ResponseCode   |
      | "1"               |  200         |
      |  "xxxxxxxxxxxx"   |  404         |
      |"1234567890987654398765" |  404        |


  Scenario Outline: Get details of posts from social networking site based on userId and accept contenttype with different test data set
    Given Set request specification <AcceptContentType> for get methods call
    When hit the api through "posts" endpoints
    Then Validate the response codes <ResponseCode>
    Examples:
      |  AcceptContentType       | ResponseCode   |
      | "application/json" |  200         |
      |  "application/xml" |  406         |
      |  "xxxxxxxxxxxx"    |  406         |
      |      ""            |  406         |