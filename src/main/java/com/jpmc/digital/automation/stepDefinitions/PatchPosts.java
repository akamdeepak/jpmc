package com.jpmc.digital.automation.stepDefinitions;

import com.jpmc.digital.automation.base.TestBase;
import com.jpmc.digital.automation.pojo.CreatePostsPojo;
import com.jpmc.digital.automation.pojo.EditPostsRequestBody;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.JSONObject;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

public class PatchPosts extends TestBase {

    RequestSpecification requestSpecification = null;
    Response resp = null;
    JSONObject ob=null;
    static String title1="";

    @Given("^Patch API is up and Running on the server$")
    public void patch_API_is_up_and_Running_on_the_server() throws Throwable {
        RestAssured.baseURI = prop.getProperty("BASE_URI");
        requestSpecification = RestAssured.given().log().all().contentType("application/json;charset=UTF-8").accept("application/json");
    }

    @When("^User perform a Patch api call on the social networking site using different test data \"([^\"]*)\"\"([^\"]*)\"$")
    public void user_perform_a_Patch_api_call_on_the_social_networking_site_using_different_test_data(String title, String userId) throws Throwable {
        title1=title;
        CreatePostsPojo createPostsPojoobj= new CreatePostsPojo("This is title","this is body","1");
        resp = requestSpecification.when().body(createPostsPojoobj).post("posts");
        Assert.assertEquals(resp.getStatusCode(), 201);
        ob= new JSONObject();
        ob.put("title",title);
        resp = requestSpecification.body(ob.toString()).when().patch("posts/"+userId);
    }

    @Then("^Validate response code (\\d+) and Response Data for each attribute$")
    public void validate_response_code_and_Response_Data_for_each_attribute(int responseCode) throws Throwable {
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
        }
        soft.assertAll();
    }
}
