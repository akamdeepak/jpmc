Feature:  Get List of comments based on postsId on social networking site
  Scenario Outline: Get List of comments based on posts id on social networking site with different test data
    Given Get Comments API is up and Running on the server
    When  hit the web services endpoint comments basedon postId <postId>
    Then Validate responseCode <ResponseCode> and response body of comments api
    Examples:
      |  postId                 | ResponseCode |
      | "1"                     |  200         |
      |  "xxxxxxxxxxxx"         |  400         |
      |"1234567890987654398765" |  404         |
      |"0"                      |  404         |
      |"-1"                     |  400         |