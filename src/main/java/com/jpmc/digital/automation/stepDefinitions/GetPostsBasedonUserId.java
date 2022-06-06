package com.jpmc.digital.automation.stepDefinitions;

import com.jpmc.digital.automation.base.TestBase;
import com.jpmc.digital.automation.pojo.GetBodyPostsAll;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import java.util.HashMap;
import java.util.regex.Pattern;

public class GetPostsBasedonUserId extends TestBase {

    RequestSpecification requestSpecification = null;
    Response resp = null;

    @Given("^Get posts API is up and Running on the server$")
    public void get_posts_API_is_up_and_Running_on_the_server() throws Throwable {
        RestAssured.baseURI = prop.getProperty("BASE_URI");
        requestSpecification = RestAssured.given().log().all().contentType("application/json;charset=UTF-8").accept("application/json");
    }

    @When("^hit the api through \"([^\"]*)\" endpoint with variable \"([^\"]*)\"$")
    public void hit_the_api_through_endpoint_with_variable(String endpoint, String variable) throws Throwable {
        HashMap<String,String> hmap= new HashMap<>();
        hmap.put("userId",variable);
        resp = requestSpecification.when().queryParams(hmap).get(endpoint);
    }

    @Then("^Validate the response code (\\d+) and response data$")
    public void validate_the_response_code_and_response_data(int responseCode) throws Throwable {
        Assert.assertEquals(resp.getStatusCode(),responseCode);
        GetBodyPostsAll[] respObj = (GetBodyPostsAll[]) resp.getBody().as(GetBodyPostsAll[].class);
        SoftAssert soft = new SoftAssert();
        if ( resp.getStatusCode()==200)
        {
            for(int i=0;i<respObj.length;i++)
            {
                soft.assertTrue(respObj[i].getUserId() > 0);
                soft.assertTrue(respObj[i].getId() > 0);
                soft.assertTrue(respObj[i].getTitle().length() > 0);
                soft.assertTrue(respObj[i].getBody().length() > 0);

                soft.assertTrue(Pattern.compile("^[0-9]+$").matcher(respObj[i].getUserId().toString()).matches() );
                soft.assertTrue(Pattern.compile("^[0-9]+$").matcher(respObj[i].getId().toString()).matches());
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getTitle()).matches());
                soft.assertTrue(Pattern.compile("(.*?(\\n))+.*?").matcher(respObj[i].getBody()).matches());

       }
            soft.assertAll();
        }

    }

    @Given("^Set request specification \"([^\"]*)\" for get methods call$")
    public void set_request_specification_for_get_methods_call(String acceptContentType) throws Throwable {
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";
        requestSpecification = RestAssured.given().log().all().contentType("application/json;charset=UTF-8").accept(acceptContentType);
    }

    @When("^hit the api through \"([^\"]*)\" endpoints$")
    public void hit_the_api_through_endpoints(String endpoint) throws Throwable {
        HashMap<String,String> hmap= new HashMap<>();
        hmap.put("userId","1");
        resp = requestSpecification.when().queryParams(hmap).get(endpoint);
    }

    @Then("^Validate the response codes (\\d+)$")
    public void validate_the_response_codes(int responseCode) throws Throwable {
        Assert.assertEquals(resp.getStatusCode(),responseCode );
    }


}
