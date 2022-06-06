Feature: Delete post from social network site

  Scenario Outline: Delete post from social network site using different test data
    Given Delete Posts API is up and Running on the server
    When  User perform a delete api call to delete post from social network site with different test data <UserId>
    Then Validate ResponseCode <ResponseCode> and response data for Delete posts
    Examples:
          | UserId         | ResponseCode|
          | "1"            |200          |
          | "1"            |404          |
          | "100000000000" |404          |
          | "xxxxxxx"      |400          |
          | ""             |400          |



