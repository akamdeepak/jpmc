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
  "duration": 547717546,
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
  "duration": 1435980682,
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
  "duration": 45054503,
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
  "duration": 1271325,
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
  "duration": 512073571,
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
  "duration": 7309816,
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
  "duration": 596795,
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
  "duration": 520533648,
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
  "duration": 245843,
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
  "duration": 1059567,
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
  "duration": 495823355,
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
  "duration": 246818,
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
  "duration": 766810,
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
  "duration": 522790131,
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
  "duration": 262306,
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
  "duration": 1126446,
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
  "duration": 491004401,
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
  "duration": 265288,
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
  "duration": 765355,
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
  "duration": 516897645,
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
  "duration": 284720,
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
  "duration": 712531,
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
  "duration": 514670101,
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
  "duration": 258551,
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
  "duration": 758452,
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
  "duration": 491327185,
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
  "duration": 285372,
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
  "duration": 767124,
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
  "duration": 495238739,
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
  "duration": 308835,
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
  "duration": 743091,
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
  "duration": 530079797,
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
  "duration": 4118922,
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
  "duration": 634974,
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
  "duration": 484263962,
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
  "duration": 99464,
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
  "duration": 745327,
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
  "duration": 500835457,
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
  "duration": 294226,
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
  "duration": 1008443,
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
  "duration": 501837700,
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
  "duration": 269091,
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
  "duration": 950171,
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
  "duration": 539952865,
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
  "duration": 286606,
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
  "duration": 3433634,
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
  "duration": 602000755,
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
  "duration": 95409,
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
  "duration": 775006,
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
  "duration": 506212788,
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
  "duration": 198697,
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
  "duration": 717373,
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
  "duration": 568495574,
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
  "duration": 226608,
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
  "duration": 690055,
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
  "duration": 552546543,
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
  "duration": 286290,
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
  "duration": 716937,
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
  "duration": 610114137,
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
  "duration": 257331,
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
  "duration": 612942,
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
  "duration": 999122131,
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
  "duration": 3397585,
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
  "duration": 486087,
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
  "duration": 1109571321,
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
  "duration": 237872,
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
  "duration": 547670,
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
  "duration": 1054252214,
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
  "duration": 193076,
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
  "duration": 459487,
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
  "duration": 1137791287,
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
  "duration": 3212783,
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
  "duration": 572989,
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
  "duration": 981402732,
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
  "duration": 292731,
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
  "duration": 496799,
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
  "duration": 991251121,
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
  "duration": 263035,
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
  "duration": 606433,
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
  "duration": 1069060065,
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
  "duration": 262038,
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
  "duration": 579503,
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
  "duration": 52521966,
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
  "duration": 4645774,
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
  "duration": 418510,
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
  "duration": 37697590,
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
  "duration": 209024,
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
  "duration": 498379,
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
  "duration": 41959941,
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
  "duration": 158778,
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
  "duration": 434757,
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
  "duration": 36601443,
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
  "duration": 268104,
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
  "duration": 525865,
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
  "duration": 40150990,
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
  "duration": 258638,
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
  "duration": 703638,
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
  "duration": 37451537,
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
  "duration": 2825837,
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
  "duration": 432987,
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
  "duration": 42214516,
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
  "duration": 170052,
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
  "duration": 420886,
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
  "duration": 36549942,
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
  "duration": 172314,
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
  "duration": 395278,
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
  "duration": 40674158,
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
  "duration": 160410,
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
  "duration": 385839,
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
  "duration": 35052382,
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
  "duration": 178579,
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
  "duration": 377390,
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
  "duration": 45881568,
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
  "duration": 169961,
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
  "duration": 498000,
  "status": "passed"
});
formatter.match({
  "location": "GetAllPosts.user_perform_a_Get_api_call_to_list_down_all_the_posts_on_social_networking_site()"
});
formatter.result({
  "duration": 36462928,
  "status": "passed"
});
formatter.match({
  "location": "GetAllPosts.validate_response_code()"
});
formatter.result({
  "duration": 32979,
  "status": "passed"
});
formatter.match({
  "location": "GetAllPosts.validate_response_data_for_each_enttity()"
});
formatter.result({
  "duration": 10182869,
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
  "duration": 514461,
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
  "duration": 36336273,
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
  "duration": 60608,
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
  "duration": 515500,
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
  "duration": 41073355,
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
  "duration": 236285,
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
  "duration": 564728,
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
  "duration": 39962066,
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
  "duration": 195612,
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
  "duration": 540457,
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
  "duration": 37043944,
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
  "duration": 4363758,
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
  "duration": 451872,
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
  "duration": 35296503,
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
  "duration": 172690,
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
  "duration": 380937,
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
  "duration": 35584331,
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
  "duration": 169255,
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
  "duration": 419388,
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
  "duration": 43997236,
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
  "duration": 75302,
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
  "duration": 537070,
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
  "duration": 49291081,
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
  "duration": 206111,
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
  "duration": 414932,
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
  "duration": 44652808,
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
  "duration": 196745,
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
  "duration": 426340,
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
  "duration": 38432786,
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
  "duration": 223848,
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
  "duration": 625268,
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
  "duration": 47621028,
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
  "duration": 10717263,
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
  "duration": 528734,
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
  "duration": 46667028,
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
  "duration": 5857405,
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
  "duration": 389801,
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
  "duration": 36868684,
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
  "duration": 4591536,
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
  "duration": 465845,
  "status": "passed"
});
formatter.match({
  "location": "GetUsers.perform_get_users_api_call_on_social_network_site()"
});
formatter.result({
  "duration": 47928518,
  "status": "passed"
});
formatter.match({
  "location": "GetUsers.validate_the_response_code_and_response_data_for_all_users()"
});
formatter.result({
  "duration": 6149953,
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
  "duration": 473672,
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
  "duration": 1064224038,
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
  "duration": 3741107,
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
  "duration": 430866,
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
  "duration": 990780847,
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
  "duration": 298968,
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
  "duration": 474463,
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
  "duration": 965646623,
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
  "duration": 275940,
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
  "duration": 463916,
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
  "duration": 1205236851,
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
  "duration": 277419,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\n\tat org.testng.Assert.fail(Assert.java:110)\n\tat org.testng.Assert.failNotEquals(Assert.java:1413)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:149)\n\tat org.testng.Assert.assertEquals(Assert.java:131)\n\tat org.testng.Assert.assertEquals(Assert.java:1240)\n\tat org.testng.Assert.assertEquals(Assert.java:1274)\n\tat com.jpmc.digital.automation.stepDefinitions.PatchPosts.validate_response_code_and_Response_Data_for_each_attribute(PatchPosts.java:42)\n\tat ✽.Then Validate response code 400 and Response Data for each attribute(PatchPosts.feature:6)\n",
  "status": "failed"
});
});