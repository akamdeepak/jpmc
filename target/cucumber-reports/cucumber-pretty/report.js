$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreatePosts.feature");
formatter.feature({
  "line": 1,
  "name": "Create posts with different type of combination",
  "description": "",
  "id": "create-posts-with-different-type-of-combination",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create posts on social network site with different test data",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Create Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a post api call to create a new post on the social network site using \u003ctitle\u003e, \u003cbody\u003e,\u003cUserId\u003e data",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate return api response code \u003cResponseCode\u003e and ResponseData for each attribute",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;",
  "rows": [
    {
      "cells": [
        "title",
        "body",
        "UserId",
        "ResponseCode"
      ],
      "line": 8,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;1"
    },
    {
      "cells": [
        "\"This is world war\"",
        "\"quo et expedita modi cum officia vel magni\ndoloribus qui\"",
        "\"1\"",
        "201"
      ],
      "line": 9,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;2"
    },
    {
      "cells": [
        "\"This is world war\"",
        "\"quo et expedita modi cum officia vel magni\ndoloribus qui\"",
        "\"0\"",
        "400"
      ],
      "line": 10,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;3"
    },
    {
      "cells": [
        "\"This is world war\"",
        "\"quo et expedita modi cum officia vel magni\ndoloribus qui\"",
        "\"123456876545678\"",
        "400"
      ],
      "line": 11,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;4"
    },
    {
      "cells": [
        "\"\"",
        "\"quo et expedita modi cum officia vel magni\ndoloribus qui\"",
        "\"1\"",
        "400"
      ],
      "line": 12,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;5"
    },
    {
      "cells": [
        "\"This is world war\"",
        "\"\"",
        "\"1\"",
        "200"
      ],
      "line": 13,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;6"
    },
    {
      "cells": [
        "\"This is world war\"",
        "\"quo et expedita modi cum officia vel magni\ndoloribus qui\"",
        "\"\"",
        "400"
      ],
      "line": 14,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;7"
    },
    {
      "cells": [
        "\"\"",
        "\"quo et expedita modi cum officia vel magni\ndoloribus qui\"",
        "\"\"",
        "400"
      ],
      "line": 15,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;8"
    },
    {
      "cells": [
        "\"\"",
        "\"\"",
        "\"\"",
        "400"
      ],
      "line": 16,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;9"
    },
    {
      "cells": [
        "\"This is world war\"",
        "\"quo et expedita modi cum officia vel magni\ndoloribus qui\"",
        "\"1123456789876543287652345678\"",
        "400"
      ],
      "line": 17,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;10"
    },
    {
      "cells": [
        "\"AAAAAAAAAAAAAAAAAAA\"",
        "\"quo et expedita modi cum officia vel magni\ndoloribus qui\"",
        "\"1\"",
        "400"
      ],
      "line": 18,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;11"
    },
    {
      "cells": [
        "\"This is world war\"",
        "\"AAAAAAAAAAAAAAAAAAAAAAAAWQERTYUIOUYTRERTYUIOUYTREWRTYUIOUYTREWRTYUIOIUYTRERTYUIOPIUYTRERTYUIOIUYTRERTYUIOIUYTRERTYUIOUYTRESDFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDS\"",
        "\"1\"",
        "201"
      ],
      "line": 19,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;12"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Create posts on social network site with different test data",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Create Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a post api call to create a new post on the social network site using \"This is world war\", \"quo et expedita modi cum officia vel magni\ndoloribus qui\",\"1\" data",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate return api response code 201 and ResponseData for each attribute",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePosts.create_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 900280401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is world war",
      "offset": 84
    },
    {
      "val": "quo et expedita modi cum officia vel magni\ndoloribus qui",
      "offset": 105
    },
    {
      "val": "1",
      "offset": 164
    }
  ],
  "location": "CreatePosts.user_perform_a_post_api_call_to_create_a_new_post_on_the_social_network_site_using_data(String,String,String)"
});
formatter.result({
  "duration": 2551749747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 34
    }
  ],
  "location": "CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(int)"
});
formatter.result({
  "duration": 59294670,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Create posts on social network site with different test data",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Create Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a post api call to create a new post on the social network site using \"This is world war\", \"quo et expedita modi cum officia vel magni\ndoloribus qui\",\"0\" data",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate return api response code 400 and ResponseData for each attribute",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePosts.create_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 2053032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is world war",
      "offset": 84
    },
    {
      "val": "quo et expedita modi cum officia vel magni\ndoloribus qui",
      "offset": 105
    },
    {
      "val": "0",
      "offset": 164
    }
  ],
  "location": "CreatePosts.user_perform_a_post_api_call_to_create_a_new_post_on_the_social_network_site_using_data(String,String,String)"
});
formatter.result({
  "duration": 527619270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 34
    }
  ],
  "location": "CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(int)"
});
formatter.result({
  "duration": 10437598,
  "error_message": "java.lang.AssertionError: expected [400] but found [201]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(CreatePosts.java:44)\n\tat ✽.Then Validate return api response code 400 and ResponseData for each attribute(CreatePosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Create posts on social network site with different test data",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Create Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a post api call to create a new post on the social network site using \"This is world war\", \"quo et expedita modi cum officia vel magni\ndoloribus qui\",\"123456876545678\" data",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate return api response code 400 and ResponseData for each attribute",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePosts.create_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 975669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is world war",
      "offset": 84
    },
    {
      "val": "quo et expedita modi cum officia vel magni\ndoloribus qui",
      "offset": 105
    },
    {
      "val": "123456876545678",
      "offset": 164
    }
  ],
  "location": "CreatePosts.user_perform_a_post_api_call_to_create_a_new_post_on_the_social_network_site_using_data(String,String,String)"
});
formatter.result({
  "duration": 500678607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 34
    }
  ],
  "location": "CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(int)"
});
formatter.result({
  "duration": 219663,
  "error_message": "java.lang.AssertionError: expected [400] but found [201]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(CreatePosts.java:44)\n\tat ✽.Then Validate return api response code 400 and ResponseData for each attribute(CreatePosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "Create posts on social network site with different test data",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Create Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a post api call to create a new post on the social network site using \"\", \"quo et expedita modi cum officia vel magni\ndoloribus qui\",\"1\" data",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate return api response code 400 and ResponseData for each attribute",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePosts.create_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 1544111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 84
    },
    {
      "val": "quo et expedita modi cum officia vel magni\ndoloribus qui",
      "offset": 88
    },
    {
      "val": "1",
      "offset": 147
    }
  ],
  "location": "CreatePosts.user_perform_a_post_api_call_to_create_a_new_post_on_the_social_network_site_using_data(String,String,String)"
});
formatter.result({
  "duration": 523762309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 34
    }
  ],
  "location": "CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(int)"
});
formatter.result({
  "duration": 223031,
  "error_message": "java.lang.AssertionError: expected [400] but found [201]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(CreatePosts.java:44)\n\tat ✽.Then Validate return api response code 400 and ResponseData for each attribute(CreatePosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Create posts on social network site with different test data",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Create Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a post api call to create a new post on the social network site using \"This is world war\", \"\",\"1\" data",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate return api response code 200 and ResponseData for each attribute",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePosts.create_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 981619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is world war",
      "offset": 84
    },
    {
      "val": "",
      "offset": 105
    },
    {
      "val": "1",
      "offset": 108
    }
  ],
  "location": "CreatePosts.user_perform_a_post_api_call_to_create_a_new_post_on_the_social_network_site_using_data(String,String,String)"
});
formatter.result({
  "duration": 497237159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 34
    }
  ],
  "location": "CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(int)"
});
formatter.result({
  "duration": 247562,
  "error_message": "java.lang.AssertionError: expected [200] but found [201]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(CreatePosts.java:44)\n\tat ✽.Then Validate return api response code 200 and ResponseData for each attribute(CreatePosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Create posts on social network site with different test data",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Create Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a post api call to create a new post on the social network site using \"This is world war\", \"quo et expedita modi cum officia vel magni\ndoloribus qui\",\"\" data",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate return api response code 400 and ResponseData for each attribute",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePosts.create_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 12956327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is world war",
      "offset": 84
    },
    {
      "val": "quo et expedita modi cum officia vel magni\ndoloribus qui",
      "offset": 105
    },
    {
      "val": "",
      "offset": 164
    }
  ],
  "location": "CreatePosts.user_perform_a_post_api_call_to_create_a_new_post_on_the_social_network_site_using_data(String,String,String)"
});
formatter.result({
  "duration": 500158562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 34
    }
  ],
  "location": "CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(int)"
});
formatter.result({
  "duration": 225321,
  "error_message": "java.lang.AssertionError: expected [400] but found [201]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(CreatePosts.java:44)\n\tat ✽.Then Validate return api response code 400 and ResponseData for each attribute(CreatePosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Create posts on social network site with different test data",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Create Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a post api call to create a new post on the social network site using \"\", \"quo et expedita modi cum officia vel magni\ndoloribus qui\",\"\" data",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate return api response code 400 and ResponseData for each attribute",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePosts.create_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 635294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 84
    },
    {
      "val": "quo et expedita modi cum officia vel magni\ndoloribus qui",
      "offset": 88
    },
    {
      "val": "",
      "offset": 147
    }
  ],
  "location": "CreatePosts.user_perform_a_post_api_call_to_create_a_new_post_on_the_social_network_site_using_data(String,String,String)"
});
formatter.result({
  "duration": 500465951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 34
    }
  ],
  "location": "CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(int)"
});
formatter.result({
  "duration": 213247,
  "error_message": "java.lang.AssertionError: expected [400] but found [201]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(CreatePosts.java:44)\n\tat ✽.Then Validate return api response code 400 and ResponseData for each attribute(CreatePosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Create posts on social network site with different test data",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Create Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a post api call to create a new post on the social network site using \"\", \"\",\"\" data",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate return api response code 400 and ResponseData for each attribute",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePosts.create_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 639851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 84
    },
    {
      "val": "",
      "offset": 88
    },
    {
      "val": "",
      "offset": 91
    }
  ],
  "location": "CreatePosts.user_perform_a_post_api_call_to_create_a_new_post_on_the_social_network_site_using_data(String,String,String)"
});
formatter.result({
  "duration": 495700769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 34
    }
  ],
  "location": "CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(int)"
});
formatter.result({
  "duration": 260723,
  "error_message": "java.lang.AssertionError: expected [400] but found [201]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(CreatePosts.java:44)\n\tat ✽.Then Validate return api response code 400 and ResponseData for each attribute(CreatePosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "Create posts on social network site with different test data",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Create Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a post api call to create a new post on the social network site using \"This is world war\", \"quo et expedita modi cum officia vel magni\ndoloribus qui\",\"1123456789876543287652345678\" data",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate return api response code 400 and ResponseData for each attribute",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePosts.create_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 711192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is world war",
      "offset": 84
    },
    {
      "val": "quo et expedita modi cum officia vel magni\ndoloribus qui",
      "offset": 105
    },
    {
      "val": "1123456789876543287652345678",
      "offset": 164
    }
  ],
  "location": "CreatePosts.user_perform_a_post_api_call_to_create_a_new_post_on_the_social_network_site_using_data(String,String,String)"
});
formatter.result({
  "duration": 496212024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 34
    }
  ],
  "location": "CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(int)"
});
formatter.result({
  "duration": 312669,
  "error_message": "java.lang.AssertionError: expected [400] but found [201]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(CreatePosts.java:44)\n\tat ✽.Then Validate return api response code 400 and ResponseData for each attribute(CreatePosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 18,
  "name": "Create posts on social network site with different test data",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Create Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a post api call to create a new post on the social network site using \"AAAAAAAAAAAAAAAAAAA\", \"quo et expedita modi cum officia vel magni\ndoloribus qui\",\"1\" data",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate return api response code 400 and ResponseData for each attribute",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePosts.create_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 761967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAAAAAAAAAAAAAAAAAA",
      "offset": 84
    },
    {
      "val": "quo et expedita modi cum officia vel magni\ndoloribus qui",
      "offset": 107
    },
    {
      "val": "1",
      "offset": 166
    }
  ],
  "location": "CreatePosts.user_perform_a_post_api_call_to_create_a_new_post_on_the_social_network_site_using_data(String,String,String)"
});
formatter.result({
  "duration": 499843100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 34
    }
  ],
  "location": "CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(int)"
});
formatter.result({
  "duration": 260156,
  "error_message": "java.lang.AssertionError: expected [400] but found [201]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(CreatePosts.java:44)\n\tat ✽.Then Validate return api response code 400 and ResponseData for each attribute(CreatePosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "Create posts on social network site with different test data",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-test-data;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Create Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a post api call to create a new post on the social network site using \"This is world war\", \"AAAAAAAAAAAAAAAAAAAAAAAAWQERTYUIOUYTRERTYUIOUYTREWRTYUIOUYTREWRTYUIOIUYTRERTYUIOPIUYTRERTYUIOIUYTRERTYUIOIUYTRERTYUIOUYTRESDFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDS\",\"1\" data",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate return api response code 201 and ResponseData for each attribute",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePosts.create_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 720007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is world war",
      "offset": 84
    },
    {
      "val": "AAAAAAAAAAAAAAAAAAAAAAAAWQERTYUIOUYTRERTYUIOUYTREWRTYUIOUYTREWRTYUIOIUYTRERTYUIOPIUYTRERTYUIOIUYTRERTYUIOIUYTRERTYUIOUYTRESDFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDSADFGHJKHGFDS",
      "offset": 105
    },
    {
      "val": "1",
      "offset": 302
    }
  ],
  "location": "CreatePosts.user_perform_a_post_api_call_to_create_a_new_post_on_the_social_network_site_using_data(String,String,String)"
});
formatter.result({
  "duration": 520198412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 34
    }
  ],
  "location": "CreatePosts.validate_return_api_response_code_and_ResponseData_for_each_attribute(int)"
});
formatter.result({
  "duration": 3943673,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Create posts on social network site with different acceptType",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-accepttype",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Set request specification \u003caccept\u003e for create posts on social Network site",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "hit the web services endpoint \"posts\" for Posts",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Validate response codes \u003cResponseCode\u003e and response data",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-accepttype;",
  "rows": [
    {
      "cells": [
        "accept",
        "ResponseCode"
      ],
      "line": 28,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-accepttype;;1"
    },
    {
      "cells": [
        "\"application/json\"",
        "201"
      ],
      "line": 29,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-accepttype;;2"
    },
    {
      "cells": [
        "\"application/xml\"",
        "406"
      ],
      "line": 30,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-accepttype;;3"
    },
    {
      "cells": [
        "\"xxxxxxxxxxxx\"",
        "406"
      ],
      "line": 31,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-accepttype;;4"
    },
    {
      "cells": [
        "\"\"",
        "406"
      ],
      "line": 32,
      "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-accepttype;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Create posts on social network site with different acceptType",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-accepttype;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Set request specification \"application/json\" for create posts on social Network site",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "hit the web services endpoint \"posts\" for Posts",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Validate response codes 201 and response data",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 27
    }
  ],
  "location": "CreatePosts.set_request_specification_for_create_posts_on_social_Network_site(String)"
});
formatter.result({
  "duration": 645389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 31
    }
  ],
  "location": "CreatePosts.hit_the_web_services_endpoint_for_Posts(String)"
});
formatter.result({
  "duration": 481031305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 24
    }
  ],
  "location": "CreatePosts.validate_response_codes_and_response_data(int)"
});
formatter.result({
  "duration": 73346,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Create posts on social network site with different acceptType",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-accepttype;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Set request specification \"application/xml\" for create posts on social Network site",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "hit the web services endpoint \"posts\" for Posts",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Validate response codes 406 and response data",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "application/xml",
      "offset": 27
    }
  ],
  "location": "CreatePosts.set_request_specification_for_create_posts_on_social_Network_site(String)"
});
formatter.result({
  "duration": 814981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 31
    }
  ],
  "location": "CreatePosts.hit_the_web_services_endpoint_for_Posts(String)"
});
formatter.result({
  "duration": 510041871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 24
    }
  ],
  "location": "CreatePosts.validate_response_codes_and_response_data(int)"
});
formatter.result({
  "duration": 287118,
  "error_message": "java.lang.AssertionError: expected [406] but found [201]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.CreatePosts.validate_response_codes_and_response_data(CreatePosts.java:76)\n\tat ✽.Then Validate response codes 406 and response data(CreatePosts.feature:26)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 31,
  "name": "Create posts on social network site with different acceptType",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-accepttype;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Set request specification \"xxxxxxxxxxxx\" for create posts on social Network site",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "hit the web services endpoint \"posts\" for Posts",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Validate response codes 406 and response data",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "xxxxxxxxxxxx",
      "offset": 27
    }
  ],
  "location": "CreatePosts.set_request_specification_for_create_posts_on_social_Network_site(String)"
});
formatter.result({
  "duration": 1045695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 31
    }
  ],
  "location": "CreatePosts.hit_the_web_services_endpoint_for_Posts(String)"
});
formatter.result({
  "duration": 519580168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 24
    }
  ],
  "location": "CreatePosts.validate_response_codes_and_response_data(int)"
});
formatter.result({
  "duration": 500007,
  "error_message": "java.lang.AssertionError: expected [406] but found [201]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.CreatePosts.validate_response_codes_and_response_data(CreatePosts.java:76)\n\tat ✽.Then Validate response codes 406 and response data(CreatePosts.feature:26)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 32,
  "name": "Create posts on social network site with different acceptType",
  "description": "",
  "id": "create-posts-with-different-type-of-combination;create-posts-on-social-network-site-with-different-accepttype;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Set request specification \"\" for create posts on social Network site",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "hit the web services endpoint \"posts\" for Posts",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Validate response codes 406 and response data",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "CreatePosts.set_request_specification_for_create_posts_on_social_Network_site(String)"
});
formatter.result({
  "duration": 938680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 31
    }
  ],
  "location": "CreatePosts.hit_the_web_services_endpoint_for_Posts(String)"
});
formatter.result({
  "duration": 546414311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 24
    }
  ],
  "location": "CreatePosts.validate_response_codes_and_response_data(int)"
});
formatter.result({
  "duration": 260607,
  "error_message": "java.lang.AssertionError: expected [406] but found [201]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.CreatePosts.validate_response_codes_and_response_data(CreatePosts.java:76)\n\tat ✽.Then Validate response codes 406 and response data(CreatePosts.feature:26)\n",
  "status": "failed"
});
formatter.uri("DeletePosts.feature");
formatter.feature({
  "line": 1,
  "name": "Delete post from social network site",
  "description": "",
  "id": "delete-post-from-social-network-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Delete post from social network site using different test data",
  "description": "",
  "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Delete Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a delete api call to delete post from social network site with different test data \u003cUserId\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate ResponseCode \u003cResponseCode\u003e and response data for Delete posts",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data;",
  "rows": [
    {
      "cells": [
        "UserId",
        "ResponseCode"
      ],
      "line": 8,
      "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data;;1"
    },
    {
      "cells": [
        "\"1\"",
        "200"
      ],
      "line": 9,
      "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data;;2"
    },
    {
      "cells": [
        "\"1\"",
        "404"
      ],
      "line": 10,
      "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data;;3"
    },
    {
      "cells": [
        "\"100000000000\"",
        "404"
      ],
      "line": 11,
      "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data;;4"
    },
    {
      "cells": [
        "\"xxxxxxx\"",
        "400"
      ],
      "line": 12,
      "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data;;5"
    },
    {
      "cells": [
        "\"\"",
        "400"
      ],
      "line": 13,
      "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Delete post from social network site using different test data",
  "description": "",
  "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Delete Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a delete api call to delete post from social network site with different test data \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate ResponseCode 200 and response data for Delete posts",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeletePosts.delete_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 6018670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 97
    }
  ],
  "location": "DeletePosts.user_perform_a_delete_api_call_to_delete_post_from_social_network_site_with_different_test_data(String)"
});
formatter.result({
  "duration": 517763531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "DeletePosts.validate_ResponseCode_and_response_data_for_Delete_posts(int)"
});
formatter.result({
  "duration": 103373,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Delete post from social network site using different test data",
  "description": "",
  "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Delete Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a delete api call to delete post from social network site with different test data \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate ResponseCode 404 and response data for Delete posts",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeletePosts.delete_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 952640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 97
    }
  ],
  "location": "DeletePosts.user_perform_a_delete_api_call_to_delete_post_from_social_network_site_with_different_test_data(String)"
});
formatter.result({
  "duration": 510496473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    }
  ],
  "location": "DeletePosts.validate_ResponseCode_and_response_data_for_Delete_posts(int)"
});
formatter.result({
  "duration": 307477,
  "error_message": "java.lang.AssertionError: expected [404] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.DeletePosts.validate_ResponseCode_and_response_data_for_Delete_posts(DeletePosts.java:30)\n\tat ✽.Then Validate ResponseCode 404 and response data for Delete posts(DeletePosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Delete post from social network site using different test data",
  "description": "",
  "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Delete Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a delete api call to delete post from social network site with different test data \"100000000000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate ResponseCode 404 and response data for Delete posts",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeletePosts.delete_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 828539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100000000000",
      "offset": 97
    }
  ],
  "location": "DeletePosts.user_perform_a_delete_api_call_to_delete_post_from_social_network_site_with_different_test_data(String)"
});
formatter.result({
  "duration": 481916902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    }
  ],
  "location": "DeletePosts.validate_ResponseCode_and_response_data_for_Delete_posts(int)"
});
formatter.result({
  "duration": 195854,
  "error_message": "java.lang.AssertionError: expected [404] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.DeletePosts.validate_ResponseCode_and_response_data_for_Delete_posts(DeletePosts.java:30)\n\tat ✽.Then Validate ResponseCode 404 and response data for Delete posts(DeletePosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "Delete post from social network site using different test data",
  "description": "",
  "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Delete Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a delete api call to delete post from social network site with different test data \"xxxxxxx\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate ResponseCode 400 and response data for Delete posts",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeletePosts.delete_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 819860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xxxxxxx",
      "offset": 97
    }
  ],
  "location": "DeletePosts.user_perform_a_delete_api_call_to_delete_post_from_social_network_site_with_different_test_data(String)"
});
formatter.result({
  "duration": 505737071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "DeletePosts.validate_ResponseCode_and_response_data_for_Delete_posts(int)"
});
formatter.result({
  "duration": 228498,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.DeletePosts.validate_ResponseCode_and_response_data_for_Delete_posts(DeletePosts.java:30)\n\tat ✽.Then Validate ResponseCode 400 and response data for Delete posts(DeletePosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Delete post from social network site using different test data",
  "description": "",
  "id": "delete-post-from-social-network-site;delete-post-from-social-network-site-using-different-test-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Delete Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a delete api call to delete post from social network site with different test data \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate ResponseCode 400 and response data for Delete posts",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeletePosts.delete_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 557449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 97
    }
  ],
  "location": "DeletePosts.user_perform_a_delete_api_call_to_delete_post_from_social_network_site_with_different_test_data(String)"
});
formatter.result({
  "duration": 478528824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "DeletePosts.validate_ResponseCode_and_response_data_for_Delete_posts(int)"
});
formatter.result({
  "duration": 183195,
  "error_message": "java.lang.AssertionError: expected [400] but found [404]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.DeletePosts.validate_ResponseCode_and_response_data_for_Delete_posts(DeletePosts.java:30)\n\tat ✽.Then Validate ResponseCode 400 and response data for Delete posts(DeletePosts.feature:6)\n",
  "status": "failed"
});
formatter.uri("EditPosts.feature");
formatter.feature({
  "line": 1,
  "name": "Edit posts on social networking site",
  "description": "",
  "id": "edit-posts-on-social-networking-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Edit posts on social networking site using different test data",
  "description": "",
  "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Edit Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a put api call to edit social post on networking site using different \u003ctitle\u003e, \u003cbody\u003e,\u003cUserId\u003e data set",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate api response code \u003cResponseCode\u003e and ResponseData different attributes",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;",
  "rows": [
    {
      "cells": [
        "title",
        "body",
        "UserId",
        "ResponseCode"
      ],
      "line": 8,
      "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;1"
    },
    {
      "cells": [
        "\"This is world war\"",
        "\"This is text body\"",
        "\"1\"",
        "200"
      ],
      "line": 9,
      "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;2"
    },
    {
      "cells": [
        "\"\"",
        "\"This is text body\"",
        "\"1\"",
        "400"
      ],
      "line": 10,
      "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;3"
    },
    {
      "cells": [
        "\"This is world war\"",
        "\"\"",
        "\"1\"",
        "400"
      ],
      "line": 11,
      "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;4"
    },
    {
      "cells": [
        "\"This is world war\"",
        "\"This is text body\"",
        "\"\"",
        "404"
      ],
      "line": 12,
      "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;5"
    },
    {
      "cells": [
        "\"This is world war\"",
        "\"This is text body\"",
        "\"23456756\"",
        "400"
      ],
      "line": 13,
      "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;6"
    },
    {
      "cells": [
        "\"This is world war\"",
        "\"This is text body\"",
        "\"abc\"",
        "400"
      ],
      "line": 14,
      "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;7"
    },
    {
      "cells": [
        "\"wqertyuiouytrewrtyuiouytrewrtyuiouytrertyuiouytrewrtyuiouytrertyuiopiuytrewrtyuiopiuytrertyuiopiuytrewrtyuiouytrewrtyuiouytrertyuiouytsdfghjkgfdsdfghjklhgfdsdfghjkljhgfdsre\"",
        "\"This is text body\"",
        "\"1\"",
        "400"
      ],
      "line": 15,
      "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Edit posts on social networking site using different test data",
  "description": "",
  "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Edit Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a put api call to edit social post on networking site using different \"This is world war\", \"This is text body\",\"1\" data set",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate api response code 200 and ResponseData different attributes",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditPosts.edit_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 567027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is world war",
      "offset": 84
    },
    {
      "val": "This is text body",
      "offset": 105
    },
    {
      "val": "1",
      "offset": 125
    }
  ],
  "location": "EditPosts.user_perform_a_put_api_call_to_edit_social_post_on_networking_site_using_different_data_set(String,String,String)"
});
formatter.result({
  "duration": 1096876296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 27
    }
  ],
  "location": "EditPosts.validate_api_response_code_and_ResponseData_different_attributes(int)"
});
formatter.result({
  "duration": 3660392,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Edit posts on social networking site using different test data",
  "description": "",
  "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Edit Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a put api call to edit social post on networking site using different \"\", \"This is text body\",\"1\" data set",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate api response code 400 and ResponseData different attributes",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditPosts.edit_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 437925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 84
    },
    {
      "val": "This is text body",
      "offset": 88
    },
    {
      "val": "1",
      "offset": 108
    }
  ],
  "location": "EditPosts.user_perform_a_put_api_call_to_edit_social_post_on_networking_site_using_different_data_set(String,String,String)"
});
formatter.result({
  "duration": 1011588492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 27
    }
  ],
  "location": "EditPosts.validate_api_response_code_and_ResponseData_different_attributes(int)"
});
formatter.result({
  "duration": 223764,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.EditPosts.validate_api_response_code_and_ResponseData_different_attributes(EditPosts.java:46)\n\tat ✽.Then Validate api response code 400 and ResponseData different attributes(EditPosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Edit posts on social networking site using different test data",
  "description": "",
  "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Edit Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a put api call to edit social post on networking site using different \"This is world war\", \"\",\"1\" data set",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate api response code 400 and ResponseData different attributes",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditPosts.edit_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 469179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is world war",
      "offset": 84
    },
    {
      "val": "",
      "offset": 105
    },
    {
      "val": "1",
      "offset": 108
    }
  ],
  "location": "EditPosts.user_perform_a_put_api_call_to_edit_social_post_on_networking_site_using_different_data_set(String,String,String)"
});
formatter.result({
  "duration": 1055498191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 27
    }
  ],
  "location": "EditPosts.validate_api_response_code_and_ResponseData_different_attributes(int)"
});
formatter.result({
  "duration": 230786,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.EditPosts.validate_api_response_code_and_ResponseData_different_attributes(EditPosts.java:46)\n\tat ✽.Then Validate api response code 400 and ResponseData different attributes(EditPosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "Edit posts on social networking site using different test data",
  "description": "",
  "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Edit Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a put api call to edit social post on networking site using different \"This is world war\", \"This is text body\",\"\" data set",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate api response code 404 and ResponseData different attributes",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditPosts.edit_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 578362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is world war",
      "offset": 84
    },
    {
      "val": "This is text body",
      "offset": 105
    },
    {
      "val": "",
      "offset": 125
    }
  ],
  "location": "EditPosts.user_perform_a_put_api_call_to_edit_social_post_on_networking_site_using_different_data_set(String,String,String)"
});
formatter.result({
  "duration": 1190768010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 27
    }
  ],
  "location": "EditPosts.validate_api_response_code_and_ResponseData_different_attributes(int)"
});
formatter.result({
  "duration": 3201199,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Edit posts on social networking site using different test data",
  "description": "",
  "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Edit Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a put api call to edit social post on networking site using different \"This is world war\", \"This is text body\",\"23456756\" data set",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate api response code 400 and ResponseData different attributes",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditPosts.edit_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 491633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is world war",
      "offset": 84
    },
    {
      "val": "This is text body",
      "offset": 105
    },
    {
      "val": "23456756",
      "offset": 125
    }
  ],
  "location": "EditPosts.user_perform_a_put_api_call_to_edit_social_post_on_networking_site_using_different_data_set(String,String,String)"
});
formatter.result({
  "duration": 1015895760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 27
    }
  ],
  "location": "EditPosts.validate_api_response_code_and_ResponseData_different_attributes(int)"
});
formatter.result({
  "duration": 255350,
  "error_message": "java.lang.AssertionError: expected [400] but found [500]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.EditPosts.validate_api_response_code_and_ResponseData_different_attributes(EditPosts.java:46)\n\tat ✽.Then Validate api response code 400 and ResponseData different attributes(EditPosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Edit posts on social networking site using different test data",
  "description": "",
  "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Edit Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a put api call to edit social post on networking site using different \"This is world war\", \"This is text body\",\"abc\" data set",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate api response code 400 and ResponseData different attributes",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditPosts.edit_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 480476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is world war",
      "offset": 84
    },
    {
      "val": "This is text body",
      "offset": 105
    },
    {
      "val": "abc",
      "offset": 125
    }
  ],
  "location": "EditPosts.user_perform_a_put_api_call_to_edit_social_post_on_networking_site_using_different_data_set(String,String,String)"
});
formatter.result({
  "duration": 1148000671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 27
    }
  ],
  "location": "EditPosts.validate_api_response_code_and_ResponseData_different_attributes(int)"
});
formatter.result({
  "duration": 270891,
  "error_message": "java.lang.AssertionError: expected [400] but found [500]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.EditPosts.validate_api_response_code_and_ResponseData_different_attributes(EditPosts.java:46)\n\tat ✽.Then Validate api response code 400 and ResponseData different attributes(EditPosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Edit posts on social networking site using different test data",
  "description": "",
  "id": "edit-posts-on-social-networking-site;edit-posts-on-social-networking-site-using-different-test-data;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Edit Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a put api call to edit social post on networking site using different \"wqertyuiouytrewrtyuiouytrewrtyuiouytrertyuiouytrewrtyuiouytrertyuiopiuytrewrtyuiopiuytrertyuiopiuytrewrtyuiouytrewrtyuiouytrertyuiouytsdfghjkgfdsdfghjklhgfdsdfghjkljhgfdsre\", \"This is text body\",\"1\" data set",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate api response code 400 and ResponseData different attributes",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditPosts.edit_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 605228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wqertyuiouytrewrtyuiouytrewrtyuiouytrertyuiouytrewrtyuiouytrertyuiopiuytrewrtyuiopiuytrertyuiopiuytrewrtyuiouytrewrtyuiouytrertyuiouytsdfghjkgfdsdfghjklhgfdsdfghjkljhgfdsre",
      "offset": 84
    },
    {
      "val": "This is text body",
      "offset": 260
    },
    {
      "val": "1",
      "offset": 280
    }
  ],
  "location": "EditPosts.user_perform_a_put_api_call_to_edit_social_post_on_networking_site_using_different_data_set(String,String,String)"
});
formatter.result({
  "duration": 1247222718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 27
    }
  ],
  "location": "EditPosts.validate_api_response_code_and_ResponseData_different_attributes(int)"
});
formatter.result({
  "duration": 158514,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.EditPosts.validate_api_response_code_and_ResponseData_different_attributes(EditPosts.java:46)\n\tat ✽.Then Validate api response code 400 and ResponseData different attributes(EditPosts.feature:6)\n",
  "status": "failed"
});
formatter.uri("GetCommentsBasedOnPostId.feature");
formatter.feature({
  "line": 1,
  "name": "Get List of comments based on postsId on social networking site",
  "description": "",
  "id": "get-list-of-comments-based-on-postsid-on-social-networking-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Get List of comments based on posts id on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comments API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit the web services endpoint comments basedon postId \u003cpostId\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate responseCode \u003cResponseCode\u003e and response body of comments api",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data;",
  "rows": [
    {
      "cells": [
        "postId",
        "ResponseCode"
      ],
      "line": 7,
      "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data;;1"
    },
    {
      "cells": [
        "\"1\"",
        "200"
      ],
      "line": 8,
      "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data;;2"
    },
    {
      "cells": [
        "\"xxxxxxxxxxxx\"",
        "400"
      ],
      "line": 9,
      "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data;;3"
    },
    {
      "cells": [
        "\"1234567890987654398765\"",
        "404"
      ],
      "line": 10,
      "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data;;4"
    },
    {
      "cells": [
        "\"0\"",
        "404"
      ],
      "line": 11,
      "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data;;5"
    },
    {
      "cells": [
        "\"-1\"",
        "400"
      ],
      "line": 12,
      "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "Get List of comments based on posts id on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comments API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit the web services endpoint comments basedon postId \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate responseCode 200 and response body of comments api",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetCommentsBasedonPostId.get_Comments_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 596730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "GetCommentsBasedonPostId.hit_the_web_services_endpoint_comments_basedon_postId(String)"
});
formatter.result({
  "duration": 496861081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "GetCommentsBasedonPostId.validate_responseCode_and_response_body_of_comments_api(int)"
});
formatter.result({
  "duration": 6593454,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Get List of comments based on posts id on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comments API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit the web services endpoint comments basedon postId \"xxxxxxxxxxxx\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate responseCode 400 and response body of comments api",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetCommentsBasedonPostId.get_Comments_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 534524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xxxxxxxxxxxx",
      "offset": 55
    }
  ],
  "location": "GetCommentsBasedonPostId.hit_the_web_services_endpoint_comments_basedon_postId(String)"
});
formatter.result({
  "duration": 497105672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "GetCommentsBasedonPostId.validate_responseCode_and_response_body_of_comments_api(int)"
});
formatter.result({
  "duration": 204167,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetCommentsBasedonPostId.validate_responseCode_and_response_body_of_comments_api(GetCommentsBasedonPostId.java:38)\n\tat ✽.Then Validate responseCode 400 and response body of comments api(GetCommentsBasedOnPostId.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "Get List of comments based on posts id on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comments API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit the web services endpoint comments basedon postId \"1234567890987654398765\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate responseCode 404 and response body of comments api",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetCommentsBasedonPostId.get_Comments_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 446067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890987654398765",
      "offset": 55
    }
  ],
  "location": "GetCommentsBasedonPostId.hit_the_web_services_endpoint_comments_basedon_postId(String)"
});
formatter.result({
  "duration": 481091453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    }
  ],
  "location": "GetCommentsBasedonPostId.validate_responseCode_and_response_body_of_comments_api(int)"
});
formatter.result({
  "duration": 270850,
  "error_message": "java.lang.AssertionError: expected [404] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetCommentsBasedonPostId.validate_responseCode_and_response_body_of_comments_api(GetCommentsBasedonPostId.java:38)\n\tat ✽.Then Validate responseCode 404 and response body of comments api(GetCommentsBasedOnPostId.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Get List of comments based on posts id on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comments API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit the web services endpoint comments basedon postId \"0\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate responseCode 404 and response body of comments api",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetCommentsBasedonPostId.get_Comments_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 568739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 55
    }
  ],
  "location": "GetCommentsBasedonPostId.hit_the_web_services_endpoint_comments_basedon_postId(String)"
});
formatter.result({
  "duration": 610515776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    }
  ],
  "location": "GetCommentsBasedonPostId.validate_responseCode_and_response_body_of_comments_api(int)"
});
formatter.result({
  "duration": 180906,
  "error_message": "java.lang.AssertionError: expected [404] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetCommentsBasedonPostId.validate_responseCode_and_response_body_of_comments_api(GetCommentsBasedonPostId.java:38)\n\tat ✽.Then Validate responseCode 404 and response body of comments api(GetCommentsBasedOnPostId.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "Get List of comments based on posts id on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-postsid-on-social-networking-site;get-list-of-comments-based-on-posts-id-on-social-networking-site-with-different-test-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comments API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit the web services endpoint comments basedon postId \"-1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate responseCode 400 and response body of comments api",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetCommentsBasedonPostId.get_Comments_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 519408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 55
    }
  ],
  "location": "GetCommentsBasedonPostId.hit_the_web_services_endpoint_comments_basedon_postId(String)"
});
formatter.result({
  "duration": 506070201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "GetCommentsBasedonPostId.validate_responseCode_and_response_body_of_comments_api(int)"
});
formatter.result({
  "duration": 273336,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetCommentsBasedonPostId.validate_responseCode_and_response_body_of_comments_api(GetCommentsBasedonPostId.java:38)\n\tat ✽.Then Validate responseCode 400 and response body of comments api(GetCommentsBasedOnPostId.feature:5)\n",
  "status": "failed"
});
formatter.uri("GetCommentsBasedOnUserId.feature");
formatter.feature({
  "line": 1,
  "name": "Get List of comments based on userId on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Get List of comments based on userId on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comment API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit web services endpoint /posts/\u003cuserId\u003e/comments basedon \u003cUserId\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate response code \u003cResponseCode\u003e and response body of comments api.",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;",
  "rows": [
    {
      "cells": [
        "UserId",
        "ResponseCode"
      ],
      "line": 7,
      "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;1"
    },
    {
      "cells": [
        "\"1\"",
        "200"
      ],
      "line": 8,
      "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;2"
    },
    {
      "cells": [
        "\"xxxxxxxxxxxx\"",
        "400"
      ],
      "line": 9,
      "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;3"
    },
    {
      "cells": [
        "\"1234567890987654398765\"",
        "404"
      ],
      "line": 10,
      "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;4"
    },
    {
      "cells": [
        "\"0\"",
        "404"
      ],
      "line": 11,
      "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;5"
    },
    {
      "cells": [
        "\"-1\"",
        "400"
      ],
      "line": 12,
      "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;6"
    },
    {
      "cells": [
        "\"\"",
        "400"
      ],
      "line": 13,
      "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "Get List of comments based on userId on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comment API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit web services endpoint /posts/\u003cuserId\u003e/comments basedon \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate response code 200 and response body of comments api.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetCommentsBasedonUserId.get_Comment_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 729628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 60
    }
  ],
  "location": "GetCommentsBasedonUserId.hit_web_services_endpoint_posts_userId_comments_basedon(String)"
});
formatter.result({
  "duration": 612238069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "GetCommentsBasedonUserId.validate_response_code_and_response_body_of_comments_api(int)"
});
formatter.result({
  "duration": 3906779,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Get List of comments based on userId on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comment API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit web services endpoint /posts/\u003cuserId\u003e/comments basedon \"xxxxxxxxxxxx\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate response code 400 and response body of comments api.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetCommentsBasedonUserId.get_Comment_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 487816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xxxxxxxxxxxx",
      "offset": 60
    }
  ],
  "location": "GetCommentsBasedonUserId.hit_web_services_endpoint_posts_userId_comments_basedon(String)"
});
formatter.result({
  "duration": 503182749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "GetCommentsBasedonUserId.validate_response_code_and_response_body_of_comments_api(int)"
});
formatter.result({
  "duration": 289517,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetCommentsBasedonUserId.validate_response_code_and_response_body_of_comments_api(GetCommentsBasedonUserId.java:35)\n\tat ✽.Then Validate response code 400 and response body of comments api.(GetCommentsBasedOnUserId.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "Get List of comments based on userId on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comment API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit web services endpoint /posts/\u003cuserId\u003e/comments basedon \"1234567890987654398765\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate response code 404 and response body of comments api.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetCommentsBasedonUserId.get_Comment_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 503500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890987654398765",
      "offset": 60
    }
  ],
  "location": "GetCommentsBasedonUserId.hit_web_services_endpoint_posts_userId_comments_basedon(String)"
});
formatter.result({
  "duration": 468986606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "GetCommentsBasedonUserId.validate_response_code_and_response_body_of_comments_api(int)"
});
formatter.result({
  "duration": 274497,
  "error_message": "java.lang.AssertionError: expected [404] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetCommentsBasedonUserId.validate_response_code_and_response_body_of_comments_api(GetCommentsBasedonUserId.java:35)\n\tat ✽.Then Validate response code 404 and response body of comments api.(GetCommentsBasedOnUserId.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Get List of comments based on userId on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comment API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit web services endpoint /posts/\u003cuserId\u003e/comments basedon \"0\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate response code 404 and response body of comments api.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetCommentsBasedonUserId.get_Comment_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 497193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 60
    }
  ],
  "location": "GetCommentsBasedonUserId.hit_web_services_endpoint_posts_userId_comments_basedon(String)"
});
formatter.result({
  "duration": 493962362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "GetCommentsBasedonUserId.validate_response_code_and_response_body_of_comments_api(int)"
});
formatter.result({
  "duration": 276669,
  "error_message": "java.lang.AssertionError: expected [404] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetCommentsBasedonUserId.validate_response_code_and_response_body_of_comments_api(GetCommentsBasedonUserId.java:35)\n\tat ✽.Then Validate response code 404 and response body of comments api.(GetCommentsBasedOnUserId.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "Get List of comments based on userId on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comment API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit web services endpoint /posts/\u003cuserId\u003e/comments basedon \"-1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate response code 400 and response body of comments api.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetCommentsBasedonUserId.get_Comment_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 527733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 60
    }
  ],
  "location": "GetCommentsBasedonUserId.hit_web_services_endpoint_posts_userId_comments_basedon(String)"
});
formatter.result({
  "duration": 564328340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "GetCommentsBasedonUserId.validate_response_code_and_response_body_of_comments_api(int)"
});
formatter.result({
  "duration": 267659,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetCommentsBasedonUserId.validate_response_code_and_response_body_of_comments_api(GetCommentsBasedonUserId.java:35)\n\tat ✽.Then Validate response code 400 and response body of comments api.(GetCommentsBasedOnUserId.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Get List of comments based on userId on social networking site with different test data",
  "description": "",
  "id": "get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;get-list-of-comments-based-on-userid-on-social-networking-site-with-different-test-data;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get Comment API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit web services endpoint /posts/\u003cuserId\u003e/comments basedon \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate response code 400 and response body of comments api.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetCommentsBasedonUserId.get_Comment_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 556056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 60
    }
  ],
  "location": "GetCommentsBasedonUserId.hit_web_services_endpoint_posts_userId_comments_basedon(String)"
});
formatter.result({
  "duration": 497181978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "GetCommentsBasedonUserId.validate_response_code_and_response_body_of_comments_api(int)"
});
formatter.result({
  "duration": 229208,
  "error_message": "java.lang.AssertionError: expected [400] but found [404]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetCommentsBasedonUserId.validate_response_code_and_response_body_of_comments_api(GetCommentsBasedonUserId.java:35)\n\tat ✽.Then Validate response code 400 and response body of comments api.(GetCommentsBasedOnUserId.feature:5)\n",
  "status": "failed"
});
formatter.uri("GetPosts.feature");
formatter.feature({
  "line": 1,
  "name": "Get all posts on social network site",
  "description": "",
  "id": "get-all-posts-on-social-network-site",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Get all posts on social networking site with different test data",
  "description": "",
  "id": "get-all-posts-on-social-network-site;get-all-posts-on-social-networking-site-with-different-test-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Get Posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User perform a Get api call to list down all the posts on social networking site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate response code",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Validate response data for each enttity",
  "keyword": "And "
});
formatter.match({
  "location": "GetAllPosts.get_Posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 545143,
  "status": "passed"
});
formatter.match({
  "location": "GetAllPosts.user_perform_a_Get_api_call_to_list_down_all_the_posts_on_social_networking_site()"
});
formatter.result({
  "duration": 52015778,
  "status": "passed"
});
formatter.match({
  "location": "GetAllPosts.validate_response_code()"
});
formatter.result({
  "duration": 56574,
  "status": "passed"
});
formatter.match({
  "location": "GetAllPosts.validate_response_data_for_each_enttity()"
});
formatter.result({
  "duration": 10520709,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Get all the Posts when different contentType passed in accept",
  "description": "",
  "id": "get-all-posts-on-social-network-site;get-all-the-posts-when-different-contenttype-passed-in-accept",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Set request specification \u003cContentType\u003e for get posts call",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "hit the api through \"posts\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Validate the response code \u003cResponseCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "get-all-posts-on-social-network-site;get-all-the-posts-when-different-contenttype-passed-in-accept;",
  "rows": [
    {
      "cells": [
        "ContentType",
        "ResponseCode"
      ],
      "line": 14,
      "id": "get-all-posts-on-social-network-site;get-all-the-posts-when-different-contenttype-passed-in-accept;;1"
    },
    {
      "cells": [
        "\"application/json;charset\u003dUTF-8\"",
        "200"
      ],
      "line": 15,
      "id": "get-all-posts-on-social-network-site;get-all-the-posts-when-different-contenttype-passed-in-accept;;2"
    },
    {
      "cells": [
        "\"xxxxxxxxxxxx\"",
        "406"
      ],
      "line": 16,
      "id": "get-all-posts-on-social-network-site;get-all-the-posts-when-different-contenttype-passed-in-accept;;3"
    },
    {
      "cells": [
        "\"\"",
        "406"
      ],
      "line": 17,
      "id": "get-all-posts-on-social-network-site;get-all-the-posts-when-different-contenttype-passed-in-accept;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Get all the Posts when different contentType passed in accept",
  "description": "",
  "id": "get-all-posts-on-social-network-site;get-all-the-posts-when-different-contenttype-passed-in-accept;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Set request specification \"application/json;charset\u003dUTF-8\" for get posts call",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "hit the api through \"posts\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Validate the response code 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "application/json;charset\u003dUTF-8",
      "offset": 27
    }
  ],
  "location": "GetAllPosts.set_request_specification_for_get_posts_call(String)"
});
formatter.result({
  "duration": 409819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 21
    }
  ],
  "location": "GetAllPosts.hit_the_api_through_endpoint(String)"
});
formatter.result({
  "duration": 38382487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 27
    }
  ],
  "location": "GetAllPosts.validate_the_response_code(int)"
});
formatter.result({
  "duration": 70058,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Get all the Posts when different contentType passed in accept",
  "description": "",
  "id": "get-all-posts-on-social-network-site;get-all-the-posts-when-different-contenttype-passed-in-accept;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Set request specification \"xxxxxxxxxxxx\" for get posts call",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "hit the api through \"posts\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Validate the response code 406",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "xxxxxxxxxxxx",
      "offset": 27
    }
  ],
  "location": "GetAllPosts.set_request_specification_for_get_posts_call(String)"
});
formatter.result({
  "duration": 401721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 21
    }
  ],
  "location": "GetAllPosts.hit_the_api_through_endpoint(String)"
});
formatter.result({
  "duration": 40398426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 27
    }
  ],
  "location": "GetAllPosts.validate_the_response_code(int)"
});
formatter.result({
  "duration": 169108,
  "error_message": "java.lang.AssertionError: expected [406] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetAllPosts.validate_the_response_code(GetAllPosts.java:75)\n\tat ✽.Then Validate the response code 406(GetPosts.feature:12)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "Get all the Posts when different contentType passed in accept",
  "description": "",
  "id": "get-all-posts-on-social-network-site;get-all-the-posts-when-different-contenttype-passed-in-accept;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Set request specification \"\" for get posts call",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "hit the api through \"posts\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Validate the response code 406",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "GetAllPosts.set_request_specification_for_get_posts_call(String)"
});
formatter.result({
  "duration": 378364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 21
    }
  ],
  "location": "GetAllPosts.hit_the_api_through_endpoint(String)"
});
formatter.result({
  "duration": 44142971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 27
    }
  ],
  "location": "GetAllPosts.validate_the_response_code(int)"
});
formatter.result({
  "duration": 160408,
  "error_message": "java.lang.AssertionError: expected [406] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetAllPosts.validate_the_response_code(GetAllPosts.java:75)\n\tat ✽.Then Validate the response code 406(GetPosts.feature:12)\n",
  "status": "failed"
});
formatter.uri("GetPostsBasedonUserId.feature");
formatter.feature({
  "line": 1,
  "name": "Get Post details based on UserId",
  "description": "",
  "id": "get-post-details-based-on-userid",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Get details of posts from social networking site based on userId.",
  "description": "",
  "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit the api through \"posts\" endpoint with variable \u003cUserId\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate the response code \u003cResponseCode\u003e and response data",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid.;",
  "rows": [
    {
      "cells": [
        "UserId",
        "ResponseCode"
      ],
      "line": 7,
      "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid.;;1"
    },
    {
      "cells": [
        "\"1\"",
        "200"
      ],
      "line": 8,
      "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid.;;2"
    },
    {
      "cells": [
        "\"xxxxxxxxxxxx\"",
        "404"
      ],
      "line": 9,
      "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid.;;3"
    },
    {
      "cells": [
        "\"1234567890987654398765\"",
        "404"
      ],
      "line": 10,
      "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "Get details of posts from social networking site based on userId.",
  "description": "",
  "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit the api through \"posts\" endpoint with variable \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate the response code 200 and response data",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetPostsBasedonUserId.get_posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 557508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "GetPostsBasedonUserId.hit_the_api_through_endpoint_with_variable(String,String)"
});
formatter.result({
  "duration": 525301934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 27
    }
  ],
  "location": "GetPostsBasedonUserId.validate_the_response_code_and_response_data(int)"
});
formatter.result({
  "duration": 5486770,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Get details of posts from social networking site based on userId.",
  "description": "",
  "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit the api through \"posts\" endpoint with variable \"xxxxxxxxxxxx\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate the response code 404 and response data",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetPostsBasedonUserId.get_posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 433431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 21
    },
    {
      "val": "xxxxxxxxxxxx",
      "offset": 52
    }
  ],
  "location": "GetPostsBasedonUserId.hit_the_api_through_endpoint_with_variable(String,String)"
});
formatter.result({
  "duration": 502793109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 27
    }
  ],
  "location": "GetPostsBasedonUserId.validate_the_response_code_and_response_data(int)"
});
formatter.result({
  "duration": 200255,
  "error_message": "java.lang.AssertionError: expected [404] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetPostsBasedonUserId.validate_the_response_code_and_response_data(GetPostsBasedonUserId.java:37)\n\tat ✽.Then Validate the response code 404 and response data(GetPostsBasedonUserId.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "Get details of posts from social networking site based on userId.",
  "description": "",
  "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get posts API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "hit the api through \"posts\" endpoint with variable \"1234567890987654398765\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate the response code 404 and response data",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetPostsBasedonUserId.get_posts_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 398300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 21
    },
    {
      "val": "1234567890987654398765",
      "offset": 52
    }
  ],
  "location": "GetPostsBasedonUserId.hit_the_api_through_endpoint_with_variable(String,String)"
});
formatter.result({
  "duration": 485931539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 27
    }
  ],
  "location": "GetPostsBasedonUserId.validate_the_response_code_and_response_data(int)"
});
formatter.result({
  "duration": 278168,
  "error_message": "java.lang.AssertionError: expected [404] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetPostsBasedonUserId.validate_the_response_code_and_response_data(GetPostsBasedonUserId.java:37)\n\tat ✽.Then Validate the response code 404 and response data(GetPostsBasedonUserId.feature:5)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Get details of posts from social networking site based on userId and accept contenttype with different test data set",
  "description": "",
  "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid-and-accept-contenttype-with-different-test-data-set",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Set request specification \u003cAcceptContentType\u003e for get methods call",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "hit the api through \"posts\" endpoints",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Validate the response codes \u003cResponseCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid-and-accept-contenttype-with-different-test-data-set;",
  "rows": [
    {
      "cells": [
        "AcceptContentType",
        "ResponseCode"
      ],
      "line": 18,
      "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid-and-accept-contenttype-with-different-test-data-set;;1"
    },
    {
      "cells": [
        "\"application/json\"",
        "200"
      ],
      "line": 19,
      "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid-and-accept-contenttype-with-different-test-data-set;;2"
    },
    {
      "cells": [
        "\"application/xml\"",
        "406"
      ],
      "line": 20,
      "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid-and-accept-contenttype-with-different-test-data-set;;3"
    },
    {
      "cells": [
        "\"xxxxxxxxxxxx\"",
        "406"
      ],
      "line": 21,
      "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid-and-accept-contenttype-with-different-test-data-set;;4"
    },
    {
      "cells": [
        "\"\"",
        "406"
      ],
      "line": 22,
      "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid-and-accept-contenttype-with-different-test-data-set;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Get details of posts from social networking site based on userId and accept contenttype with different test data set",
  "description": "",
  "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid-and-accept-contenttype-with-different-test-data-set;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Set request specification \"application/json\" for get methods call",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "hit the api through \"posts\" endpoints",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Validate the response codes 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 27
    }
  ],
  "location": "GetPostsBasedonUserId.set_request_specification_for_get_methods_call(String)"
});
formatter.result({
  "duration": 521035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 21
    }
  ],
  "location": "GetPostsBasedonUserId.hit_the_api_through_endpoints(String)"
});
formatter.result({
  "duration": 43382504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "GetPostsBasedonUserId.validate_the_response_codes(int)"
});
formatter.result({
  "duration": 70659,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Get details of posts from social networking site based on userId and accept contenttype with different test data set",
  "description": "",
  "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid-and-accept-contenttype-with-different-test-data-set;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Set request specification \"application/xml\" for get methods call",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "hit the api through \"posts\" endpoints",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Validate the response codes 406",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "application/xml",
      "offset": 27
    }
  ],
  "location": "GetPostsBasedonUserId.set_request_specification_for_get_methods_call(String)"
});
formatter.result({
  "duration": 456388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 21
    }
  ],
  "location": "GetPostsBasedonUserId.hit_the_api_through_endpoints(String)"
});
formatter.result({
  "duration": 49195239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 28
    }
  ],
  "location": "GetPostsBasedonUserId.validate_the_response_codes(int)"
});
formatter.result({
  "duration": 208207,
  "error_message": "java.lang.AssertionError: expected [406] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetPostsBasedonUserId.validate_the_response_codes(GetPostsBasedonUserId.java:75)\n\tat ✽.Then Validate the response codes 406(GetPostsBasedonUserId.feature:16)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "Get details of posts from social networking site based on userId and accept contenttype with different test data set",
  "description": "",
  "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid-and-accept-contenttype-with-different-test-data-set;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Set request specification \"xxxxxxxxxxxx\" for get methods call",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "hit the api through \"posts\" endpoints",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Validate the response codes 406",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "xxxxxxxxxxxx",
      "offset": 27
    }
  ],
  "location": "GetPostsBasedonUserId.set_request_specification_for_get_methods_call(String)"
});
formatter.result({
  "duration": 457278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 21
    }
  ],
  "location": "GetPostsBasedonUserId.hit_the_api_through_endpoints(String)"
});
formatter.result({
  "duration": 51556810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 28
    }
  ],
  "location": "GetPostsBasedonUserId.validate_the_response_codes(int)"
});
formatter.result({
  "duration": 219427,
  "error_message": "java.lang.AssertionError: expected [406] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetPostsBasedonUserId.validate_the_response_codes(GetPostsBasedonUserId.java:75)\n\tat ✽.Then Validate the response codes 406(GetPostsBasedonUserId.feature:16)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 22,
  "name": "Get details of posts from social networking site based on userId and accept contenttype with different test data set",
  "description": "",
  "id": "get-post-details-based-on-userid;get-details-of-posts-from-social-networking-site-based-on-userid-and-accept-contenttype-with-different-test-data-set;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Set request specification \"\" for get methods call",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "hit the api through \"posts\" endpoints",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Validate the response codes 406",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "GetPostsBasedonUserId.set_request_specification_for_get_methods_call(String)"
});
formatter.result({
  "duration": 487522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 21
    }
  ],
  "location": "GetPostsBasedonUserId.hit_the_api_through_endpoints(String)"
});
formatter.result({
  "duration": 39298223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 28
    }
  ],
  "location": "GetPostsBasedonUserId.validate_the_response_codes(int)"
});
formatter.result({
  "duration": 410041,
  "error_message": "java.lang.AssertionError: expected [406] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.GetPostsBasedonUserId.validate_the_response_codes(GetPostsBasedonUserId.java:75)\n\tat ✽.Then Validate the response codes 406(GetPostsBasedonUserId.feature:16)\n",
  "status": "failed"
});
formatter.uri("GetUserBasedOnId.feature");
formatter.feature({
  "line": 1,
  "name": "Get Users based on Id",
  "description": "",
  "id": "get-users-based-on-id",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Get details of user based on userId active on social networking site",
  "description": "",
  "id": "get-users-based-on-id;get-details-of-user-based-on-userid-active-on-social-networking-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get users API is up and Running on the server.",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "perform get users api call on social networking site based on \u003cUserId\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate response code \u003cResponseCode\u003e and response data each attribute.",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "get-users-based-on-id;get-details-of-user-based-on-userid-active-on-social-networking-site;",
  "rows": [
    {
      "cells": [
        "UserId",
        "ResponseCode"
      ],
      "line": 7,
      "id": "get-users-based-on-id;get-details-of-user-based-on-userid-active-on-social-networking-site;;1"
    },
    {
      "cells": [
        "\"1\"",
        "200"
      ],
      "line": 8,
      "id": "get-users-based-on-id;get-details-of-user-based-on-userid-active-on-social-networking-site;;2"
    },
    {
      "cells": [
        "\"xxxxxxxxxxxx\"",
        "404"
      ],
      "line": 9,
      "id": "get-users-based-on-id;get-details-of-user-based-on-userid-active-on-social-networking-site;;3"
    },
    {
      "cells": [
        "\"1234567890987654398765\"",
        "404"
      ],
      "line": 10,
      "id": "get-users-based-on-id;get-details-of-user-based-on-userid-active-on-social-networking-site;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "Get details of user based on userId active on social networking site",
  "description": "",
  "id": "get-users-based-on-id;get-details-of-user-based-on-userid-active-on-social-networking-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get users API is up and Running on the server.",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "perform get users api call on social networking site based on \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate response code 200 and response data each attribute.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetUserDetailsBasedonId.get_users_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 551349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 63
    }
  ],
  "location": "GetUserDetailsBasedonId.perform_get_users_api_call_on_social_networking_site_based_on(String)"
});
formatter.result({
  "duration": 542469000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "GetUserDetailsBasedonId.validate_response_code_and_response_data_each_attribute(int)"
});
formatter.result({
  "duration": 11308204,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Get details of user based on userId active on social networking site",
  "description": "",
  "id": "get-users-based-on-id;get-details-of-user-based-on-userid-active-on-social-networking-site;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get users API is up and Running on the server.",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "perform get users api call on social networking site based on \"xxxxxxxxxxxx\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate response code 404 and response data each attribute.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetUserDetailsBasedonId.get_users_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 425733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xxxxxxxxxxxx",
      "offset": 63
    }
  ],
  "location": "GetUserDetailsBasedonId.perform_get_users_api_call_on_social_networking_site_based_on(String)"
});
formatter.result({
  "duration": 597865897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "GetUserDetailsBasedonId.validate_response_code_and_response_data_each_attribute(int)"
});
formatter.result({
  "duration": 5367113,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Get details of user based on userId active on social networking site",
  "description": "",
  "id": "get-users-based-on-id;get-details-of-user-based-on-userid-active-on-social-networking-site;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Get users API is up and Running on the server.",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "perform get users api call on social networking site based on \"1234567890987654398765\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate response code 404 and response data each attribute.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetUserDetailsBasedonId.get_users_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 423544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890987654398765",
      "offset": 63
    }
  ],
  "location": "GetUserDetailsBasedonId.perform_get_users_api_call_on_social_networking_site_based_on(String)"
});
formatter.result({
  "duration": 608628065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "GetUserDetailsBasedonId.validate_response_code_and_response_data_each_attribute(int)"
});
formatter.result({
  "duration": 5860047,
  "status": "passed"
});
formatter.uri("GetUsers.feature");
formatter.feature({
  "line": 1,
  "name": "Get Users",
  "description": "",
  "id": "get-users",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Get Lists of users active on social networking site with different test data",
  "description": "",
  "id": "get-users;get-lists-of-users-active-on-social-networking-site-with-different-test-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Get users API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "perform get users api call on social network site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate the response code and response data for all users",
  "keyword": "Then "
});
formatter.match({
  "location": "GetUsers.get_users_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 542623,
  "status": "passed"
});
formatter.match({
  "location": "GetUsers.perform_get_users_api_call_on_social_network_site()"
});
formatter.result({
  "duration": 49646271,
  "status": "passed"
});
formatter.match({
  "location": "GetUsers.validate_the_response_code_and_response_data_for_all_users()"
});
formatter.result({
  "duration": 5493087,
  "status": "passed"
});
formatter.uri("PatchPosts.feature");
formatter.feature({
  "line": 1,
  "name": "Perform Patch operation on social networking site",
  "description": "",
  "id": "perform-patch-operation-on-social-networking-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Perform Patch operation on social networking site with different test data",
  "description": "",
  "id": "perform-patch-operation-on-social-networking-site;perform-patch-operation-on-social-networking-site-with-different-test-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Patch API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a Patch api call on the social networking site using different test data \u003ctitle\u003e\u003cUserId\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate response code \u003cResponseCode\u003e and Response Data for each attribute",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "perform-patch-operation-on-social-networking-site;perform-patch-operation-on-social-networking-site-with-different-test-data;",
  "rows": [
    {
      "cells": [
        "title",
        "UserId",
        "ResponseCode"
      ],
      "line": 8,
      "id": "perform-patch-operation-on-social-networking-site;perform-patch-operation-on-social-networking-site-with-different-test-data;;1"
    },
    {
      "cells": [
        "\"This is patch title\"",
        "\"1\"",
        "200"
      ],
      "line": 9,
      "id": "perform-patch-operation-on-social-networking-site;perform-patch-operation-on-social-networking-site-with-different-test-data;;2"
    },
    {
      "cells": [
        "\"\"",
        "\"1\"",
        "400"
      ],
      "line": 10,
      "id": "perform-patch-operation-on-social-networking-site;perform-patch-operation-on-social-networking-site-with-different-test-data;;3"
    },
    {
      "cells": [
        "\"This is patch title\"",
        "\"123456789\"",
        "400"
      ],
      "line": 11,
      "id": "perform-patch-operation-on-social-networking-site;perform-patch-operation-on-social-networking-site-with-different-test-data;;4"
    },
    {
      "cells": [
        "\"This is patch title\"",
        "\"xxxxxxxx\"",
        "400"
      ],
      "line": 12,
      "id": "perform-patch-operation-on-social-networking-site;perform-patch-operation-on-social-networking-site-with-different-test-data;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Perform Patch operation on social networking site with different test data",
  "description": "",
  "id": "perform-patch-operation-on-social-networking-site;perform-patch-operation-on-social-networking-site-with-different-test-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Patch API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a Patch api call on the social networking site using different test data \"This is patch title\"\"1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate response code 200 and Response Data for each attribute",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PatchPosts.patch_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 461366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is patch title",
      "offset": 87
    },
    {
      "val": "1",
      "offset": 108
    }
  ],
  "location": "PatchPosts.user_perform_a_Patch_api_call_on_the_social_networking_site_using_different_test_data(String,String)"
});
formatter.result({
  "duration": 1037415447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "PatchPosts.validate_response_code_and_Response_Data_for_each_attribute(int)"
});
formatter.result({
  "duration": 3511412,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Perform Patch operation on social networking site with different test data",
  "description": "",
  "id": "perform-patch-operation-on-social-networking-site;perform-patch-operation-on-social-networking-site-with-different-test-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Patch API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a Patch api call on the social networking site using different test data \"\"\"1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate response code 400 and Response Data for each attribute",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PatchPosts.patch_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 430019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 87
    },
    {
      "val": "1",
      "offset": 89
    }
  ],
  "location": "PatchPosts.user_perform_a_Patch_api_call_on_the_social_networking_site_using_different_test_data(String,String)"
});
formatter.result({
  "duration": 995722034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "PatchPosts.validate_response_code_and_Response_Data_for_each_attribute(int)"
});
formatter.result({
  "duration": 291667,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.PatchPosts.validate_response_code_and_Response_Data_for_each_attribute(PatchPosts.java:42)\n\tat ✽.Then Validate response code 400 and Response Data for each attribute(PatchPosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Perform Patch operation on social networking site with different test data",
  "description": "",
  "id": "perform-patch-operation-on-social-networking-site;perform-patch-operation-on-social-networking-site-with-different-test-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Patch API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a Patch api call on the social networking site using different test data \"This is patch title\"\"123456789\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate response code 400 and Response Data for each attribute",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PatchPosts.patch_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 466095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is patch title",
      "offset": 87
    },
    {
      "val": "123456789",
      "offset": 108
    }
  ],
  "location": "PatchPosts.user_perform_a_Patch_api_call_on_the_social_networking_site_using_different_test_data(String,String)"
});
formatter.result({
  "duration": 1061545665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "PatchPosts.validate_response_code_and_Response_Data_for_each_attribute(int)"
});
formatter.result({
  "duration": 267127,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.PatchPosts.validate_response_code_and_Response_Data_for_each_attribute(PatchPosts.java:42)\n\tat ✽.Then Validate response code 400 and Response Data for each attribute(PatchPosts.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "Perform Patch operation on social networking site with different test data",
  "description": "",
  "id": "perform-patch-operation-on-social-networking-site;perform-patch-operation-on-social-networking-site-with-different-test-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Patch API is up and Running on the server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User perform a Patch api call on the social networking site using different test data \"This is patch title\"\"xxxxxxxx\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate response code 400 and Response Data for each attribute",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PatchPosts.patch_API_is_up_and_Running_on_the_server()"
});
formatter.result({
  "duration": 498342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is patch title",
      "offset": 87
    },
    {
      "val": "xxxxxxxx",
      "offset": 108
    }
  ],
  "location": "PatchPosts.user_perform_a_Patch_api_call_on_the_social_networking_site_using_different_test_data(String,String)"
});
formatter.result({
  "duration": 965935382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "PatchPosts.validate_response_code_and_Response_Data_for_each_attribute(int)"
});
formatter.result({
  "duration": 261228,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.PatchPosts.validate_response_code_and_Response_Data_for_each_attribute(PatchPosts.java:42)\n\tat ✽.Then Validate response code 400 and Response Data for each attribute(PatchPosts.feature:6)\n",
  "status": "failed"
});
});