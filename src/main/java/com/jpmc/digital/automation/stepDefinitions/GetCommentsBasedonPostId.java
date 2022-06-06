package com.jpmc.digital.automation.stepDefinitions;

import com.jpmc.digital.automation.base.TestBase;
import com.jpmc.digital.automation.pojo.GetCommentsBasedonId;
import cucumber.api.java.en.And;
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

public class GetCommentsBasedonPostId extends TestBase
{
    RequestSpecification requestSpecification = null;
    Response resp = null;
    String regex="^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$";
    @Given("^Get Comments API is up and Running on the server$")
    public void get_Comments_API_is_up_and_Running_on_the_server() throws Throwable {
        RestAssured.baseURI = prop.getProperty("BASE_URI");
        requestSpecification = RestAssured.given().log().all().contentType("application/json;charset=UTF-8").accept("application/json");
    }

    @When("^hit the web services endpoint comments basedon postId \"([^\"]*)\"$")
    public void hit_the_web_services_endpoint_comments_basedon_postId(String postId) throws Throwable {
        HashMap<String,String> hmap= new HashMap<>();
        hmap.put("postId",postId);
        resp = requestSpecification.when().queryParams(hmap).get("/comments");
    }

    @Then("^Validate responseCode (\\d+) and response body of comments api$")
    public void validate_responseCode_and_response_body_of_comments_api(int responseCode) throws Throwable {
        Assert.assertEquals(resp.getStatusCode(), responseCode);
        GetCommentsBasedonId[] respObj = (GetCommentsBasedonId[])resp.getBody().as(GetCommentsBasedonId[].class);
        SoftAssert soft = new SoftAssert();
        if (respObj.length > 0 && resp.getStatusCode()==200)
        {
            for (int i = 0; i < respObj.length; i++)
            {
                soft.assertTrue(respObj[i].getPostId() > 0);
                soft.assertTrue(respObj[i].getId() > 0);
                soft.assertTrue(respObj[i].getName().length() > 0);
                soft.assertTrue(respObj[i].getEmail().length() > 0);
                soft.assertTrue(respObj[i].getBody().length() > 0);


                soft.assertTrue(Pattern.compile("^[0-9]+$").matcher(respObj[i].getPostId().toString()).matches());
                soft.assertTrue(Pattern.compile("^[0-9]+$").matcher(respObj[i].getId().toString()).matches());
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getName()).matches());
                soft.assertTrue(Pattern.compile(regex).matcher(respObj[i].getEmail()).matches());
                soft.assertTrue(Pattern.compile("(.*?(\\n))+.*?").matcher(respObj[i].getBody()).matches());
            }
            soft.assertAll();
        }
    }
}
