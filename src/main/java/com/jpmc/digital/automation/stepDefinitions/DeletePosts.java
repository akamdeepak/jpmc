package com.jpmc.digital.automation.stepDefinitions;

import com.jpmc.digital.automation.base.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.testng.Assert;

public class DeletePosts extends TestBase {

    RequestSpecification requestSpecification = null;
    Response resp = null;

    @Given("^Delete Posts API is up and Running on the server$")
    public void delete_Posts_API_is_up_and_Running_on_the_server() throws Throwable {
        RestAssured.baseURI = prop.getProperty("BASE_URI");
        requestSpecification = RestAssured.given().log().all().contentType("application/json;charset=UTF-8").accept("application/json");
    }

    @When("^User perform a delete api call to delete post from social network site with different test data \"([^\"]*)\"$")
    public void user_perform_a_delete_api_call_to_delete_post_from_social_network_site_with_different_test_data(String userId) throws Throwable {
        resp = requestSpecification.when().delete("posts"+"/"+userId);
    }

    @Then("^Validate ResponseCode (\\d+) and response data for Delete posts$")
    public void validate_ResponseCode_and_response_data_for_Delete_posts(int responseCode) throws Throwable {
        Assert.assertEquals(resp.getStatusCode(), responseCode);
    }

}
