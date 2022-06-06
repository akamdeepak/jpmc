package com.jpmc.digital.automation.stepDefinitions;

import com.jpmc.digital.automation.base.TestBase;
import com.jpmc.digital.automation.pojo.CreatePostsPojo;
import com.jpmc.digital.automation.pojo.CreatePostsResponseBody;
import com.jpmc.digital.automation.pojo.EditPostsRequestBody;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

public class EditPosts extends TestBase {

    RequestSpecification requestSpecification = null;
    Response resp = null;
    RequestSpecification requestSpecification1 = null;
    Response resp1 = null;
    public static String title1="";
    public static String body1="";
    public static String userId1="";

    @Given("^Edit Posts API is up and Running on the server$")
    public void edit_Posts_API_is_up_and_Running_on_the_server() throws Throwable {
        RestAssured.baseURI = prop.getProperty("BASE_URI");
        requestSpecification = RestAssured.given().log().all().contentType("application/json;charset=UTF-8").accept("application/json");
    }

    @When("^User perform a put api call to edit social post on networking site using different \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\" data set$")
    public void user_perform_a_put_api_call_to_edit_social_post_on_networking_site_using_different_data_set(String title, String body, String userId) throws Throwable {
        title1=title;body1=body;userId1=userId;
        CreatePostsPojo createPostsPojoobj= new CreatePostsPojo("This is title","this is body","1");
        resp = requestSpecification.when().body(createPostsPojoobj).post("posts");
        Assert.assertEquals(resp.getStatusCode(), 201);
        CreatePostsResponseBody respObj = (CreatePostsResponseBody) resp.getBody().as(CreatePostsResponseBody.class);
        EditPostsRequestBody editPostsRequestBody= new EditPostsRequestBody(title,body,userId,respObj.getId().toString());
        resp = requestSpecification.when().body(editPostsRequestBody).put("posts/"+ userId);
    }


    @Then("^Validate api response code (\\d+) and ResponseData different attributes$")
    public void validate_api_response_code_and_ResponseData_different_attributes(int responseCode) throws Throwable {
        Assert.assertEquals(resp.getStatusCode(), responseCode);
        EditPostsRequestBody respObj = (EditPostsRequestBody) resp.getBody().as(EditPostsRequestBody.class);
        SoftAssert soft = new SoftAssert();
        if (resp.getStatusCode() == 200)
        {
            soft.assertTrue(respObj.getUserId().length() > 0);
            soft.assertTrue(respObj.getId().length() > 0);
            soft.assertTrue(respObj.getTitle().length() > 0);
            soft.assertTrue(respObj.getBody().length() > 0);

            // soft.assertEquals(respObj.getUserId(),userId1);
            soft.assertEquals(respObj.getTitle(), title1);
            soft.assertEquals(respObj.getBody(),body1);
        }
        soft.assertAll();
    }
}
