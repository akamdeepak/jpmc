Feature: Create posts with different type of combination

  Scenario Outline: Create posts on social network site with different test data
    Given Create Posts API is up and Running on the server
    When User perform a post api call to create a new post on the social network site using <title>, <body>,<UserId> data
    Then Validate return api response code <ResponseCode> and ResponseData for each attribute
    Examples:
      | title                                                                                                                        | body                                                                                                                                                                                                 | UserId                         | ResponseCode |
      | "This is world war"                                                                                                          | "quo et expedita modi cum officia vel magni\ndoloribus qui"                                                                                                                                          | "1"                            | 201          |
      | "This is world war"                                                                                                          | "quo et expedita modi cum officia vel magni\ndoloribus qui"                                                                                                                                          | "0"                            | 400          |
      | "This is world war"                                                                                                          | "quo et expedita modi cum officia vel magni\ndoloribus qui"                                                                                                                                          | "123456876545678"              | 400          |
      | ""                                                                                                                           | "quo et expedita modi cum officia vel magni\ndoloribus qui"                                                                                                                                          | "1"                            | 400          |
      | "This is world war"                                                                                                          | ""                                                                                                                                                                                                   | "1"                            | 200          |
      | "This is world war"                                                                                                          | "quo et expedita modi cum officia vel magni\ndoloribus qui"                                                                                                                                          | ""                             | 400          |
      | ""                                                                                                                           | "quo et expedita modi cum officia vel magni\ndoloribus qui"                                                                                                                                          | ""                             | 400          |
      | ""                                                                                                                           | ""                                                                                                                                                                                                   | ""                             | 400          |
      | "This is world war"                                                                                                          | "quo et expedita modi cum officia vel magni\ndoloribus qui"                                                                                                                                          | "1123456789876543287652345678" | 400          |
      | "AAAAAAAAAAAAAAAAAAA"                                                                                                        | "quo et expedita modi cum officia vel magni\ndoloribus qui"                                                                                                                                          | "1"                            | 400          |
      | "This is world war"                                                                                                          | "AAAAAAAAAAAAAAAAAAAAAAAAWQERTYUIOUYTRERTYUIOUYTREWRTYUIOUYTREWRTYUIOIUYTRERTYUIOPIUYTRERTYUIOIUYTRERTYUIOIUYTRERTYUIOUYTRESDFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDS" | "1"                            | 201          |



  Scenario Outline: Create posts on social network site with different acceptType
    Given Set request specification <accept> for create posts on social Network site
    When hit the web services endpoint "posts" for Posts
    Then Validate response codes <ResponseCode> and response data
    Examples:
      |  accept            | ResponseCode |
      | "application/json" |  201         |
      |  "application/xml" |  406         |
      |  "xxxxxxxxxxxx"    |  406         |
      |      ""            |  406         |