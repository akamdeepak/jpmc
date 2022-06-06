package com.jpmc.digital.automation.stepDefinitions;

import com.jpmc.digital.automation.base.TestBase;
import com.jpmc.digital.automation.pojo.GetAllPostsBody;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import java.util.regex.Pattern;

public class GetAllPosts extends TestBase {

    RequestSpecification requestSpecification = null;
    Response resp = null;
    RequestSpecification requestSpecification1 = null;
    Response resp1 = null;


    @Given("^Get Posts API is up and Running on the server$")
    public void get_Posts_API_is_up_and_Running_on_the_server() throws Throwable {
        RestAssured.baseURI = prop.getProperty("BASE_URI");
        requestSpecification = RestAssured.given().log().all().contentType("application/json;charset=UTF-8").accept("application/json");
    }

    @When("^User perform a Get api call to list down all the posts on social networking site$")
    public void user_perform_a_Get_api_call_to_list_down_all_the_posts_on_social_networking_site() throws Throwable {
        resp = requestSpecification.when().get("posts");
    }

    @Then("^Validate response code$")
    public void validate_response_code() throws Throwable {
        Assert.assertEquals(resp.getStatusCode(), 200);
    }

    @Then("^Validate response data for each enttity$")
    public void validate_response_data_for_each_enttity() throws Throwable {
        GetAllPostsBody[] respObj = (GetAllPostsBody[]) resp.getBody().as(GetAllPostsBody[].class);
        SoftAssert soft = new SoftAssert();
        if (respObj.length > 0) {
            for (int i = 0; i < respObj.length; i++) {
                soft.assertTrue(respObj[i].getUserId() > 0);
                soft.assertTrue(respObj[i].getId() > 0);
                soft.assertTrue(respObj[i].getTitle().length() > 0);
                soft.assertTrue(respObj[i].getBody().length() > 0);

                soft.assertTrue(Pattern.compile("^[0-9]+$").matcher(respObj[i].getUserId().toString()).matches());
                soft.assertTrue(Pattern.compile("^[0-9]+$").matcher(respObj[i].getId().toString()).matches());
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getTitle()).matches());
                soft.assertTrue(Pattern.compile("(.*?(\\n))+.*?").matcher(respObj[i].getBody()).matches());


            }
            soft.assertAll();
        }
    }

    @Given("^Set request specification \"([^\"]*)\" for get posts call$")
    public void set_request_specification_for_get_posts_call(String acceptContentType) throws Throwable {
        RestAssured.baseURI = prop.getProperty("BASE_URI");
        requestSpecification1 = RestAssured.given().log().all().contentType("application/json;charset=UTF-8").accept(acceptContentType);
    }

    @When("^hit the api through \"([^\"]*)\" endpoint$")
    public void hit_the_api_through_endpoint(String endpoint) throws Throwable {
        resp1 = requestSpecification1.when().get(endpoint);
    }

    @Then("^Validate the response code (\\d+)$")
    public void validate_the_response_code(int responseCode) throws Throwable {
        Assert.assertEquals(resp1.getStatusCode(),responseCode );
    }

}
