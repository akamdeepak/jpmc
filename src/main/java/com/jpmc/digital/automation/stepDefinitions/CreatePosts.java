package com.jpmc.digital.automation.stepDefinitions;

import com.jpmc.digital.automation.base.TestBase;
import com.jpmc.digital.automation.pojo.CreatePostsPojo;
import com.jpmc.digital.automation.pojo.CreatePostsResponseBody;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreatePosts extends TestBase {

    RequestSpecification requestSpecification = null;
    Response resp = null;
    RequestSpecification requestSpecification1 = null;
    Response resp1 = null;
    public static String title1="";
    public static String body1="";
    public static String userId1="";


    @Given("^Create Posts API is up and Running on the server$")
    public void create_Posts_API_is_up_and_Running_on_the_server() throws Throwable {
        RestAssured.baseURI = prop.getProperty("BASE_URI");
        requestSpecification = RestAssured.given().log().all().contentType("application/json;charset=UTF-8").accept("application/json");
    }

    @When("^User perform a post api call to create a new post on the social network site using \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\" data$")
    public void user_perform_a_post_api_call_to_create_a_new_post_on_the_social_network_site_using_data(String title, String body, String userId) throws Throwable {
        title1=title;body1=body;userId1=userId;
        CreatePostsPojo createPostsPojoobj= new CreatePostsPojo(title,body,userId);
        resp = requestSpecification.when().body(createPostsPojoobj).post("posts");
    }



    @Then("^Validate return api response code (\\d+) and ResponseData for each attribute$")
    public void validate_return_api_response_code_and_ResponseData_for_each_attribute(int responseCode) throws Throwable {
        Assert.assertEquals(resp.getStatusCode(), responseCode);
        CreatePostsResponseBody respObj = (CreatePostsResponseBody) resp.getBody().as(CreatePostsResponseBody.class);
        SoftAssert soft = new SoftAssert();
        if (resp.getStatusCode() == 201)
        {
            soft.assertTrue(respObj.getUserId() > 0);
            soft.assertTrue(respObj.getId() > 0);
            soft.assertTrue(respObj.getTitle().length() > 0);
            soft.assertTrue(respObj.getBody().length() > 0);

            soft.assertEquals(respObj.getUserId().toString(),userId1);
            soft.assertEquals(respObj.getTitle(), title1);
            soft.assertEquals(respObj.getBody(),body1);
        }
        soft.assertAll();
    }


    @Given("^Set request specification \"([^\"]*)\" for create posts on social Network site$")
    public void set_request_specification_for_create_posts_on_social_Network_site(String acceptType) throws Throwable {
        RestAssured.baseURI = prop.getProperty("BASE_URI");
        requestSpecification1 = RestAssured.given().log().all().contentType("application/json;charset=UTF-8").accept(acceptType);
    }

    @When("^hit the web services endpoint \"([^\"]*)\" for Posts$")
    public void hit_the_web_services_endpoint_for_Posts(String arg1) throws Throwable {
        CreatePostsPojo createPostsPojoobj= new CreatePostsPojo("This is title","this is body","1");
        resp1 = requestSpecification1.when().body(createPostsPojoobj).post("posts");
    }

    @Then("^Validate response codes (\\d+) and response data$")
    public void validate_response_codes_and_response_data(int  responseCode) throws Throwable {
       Assert.assertEquals(resp1.getStatusCode(), responseCode);
    }


}
