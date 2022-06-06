Feature: Edit posts on social networking site

  Scenario Outline: Edit posts on social networking site using different test data
    Given Edit Posts API is up and Running on the server
    When  User perform a put api call to edit social post on networking site using different <title>, <body>,<UserId> data set
    Then Validate api response code <ResponseCode> and ResponseData different attributes
    Examples:
      | title                  | body                         | UserId              | ResponseCode |
      | "This is world war"    | "This is text body"          | "1"                 | 200          |
      | ""    | "This is text body"          | "1"                 | 400          |
      | "This is world war"    | ""          | "1"                 | 400          |
      | "This is world war"    | "This is text body"          | ""                 | 404          |
      | "This is world war"    | "This is text body"          | "23456756"                 | 400          |
      | "This is world war"    | "This is text body"          | "abc"                 | 400          |
      | "wqertyuiouytrewrtyuiouytrewrtyuiouytrertyuiouytrewrtyuiouytrertyuiopiuytrewrtyuiopiuytrertyuiopiuytrewrtyuiouytrewrtyuiouytrertyuiouytsdfghjkgfdsdfghjklhgfdsdfghjkljhgfdsre"    | "This is text body"          | "1"                 | 400          |

