Feature: Get all posts on social network site
  Scenario: Get all posts on social networking site with different test data
    Given Get Posts API is up and Running on the server
    When User perform a Get api call to list down all the posts on social networking site
    Then Validate response code
    And Validate response data for each enttity


   Scenario Outline: Get all the Posts when different contentType passed in accept
      Given Set request specification <ContentType> for get posts call
      When hit the api through "posts" endpoint
      Then Validate the response code <ResponseCode>
      Examples:
        |  ContentType                     | ResponseCode |
        | "application/json;charset=UTF-8" |  200         |
        |  "xxxxxxxxxxxx"                  |  406         |
        |      ""                          |  406         |



