package com.jpmc.digital.automation.stepDefinitions;

import com.jpmc.digital.automation.base.TestBase;
import com.jpmc.digital.automation.pojo.GetUser;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import java.util.regex.Pattern;

public class GetUserDetailsBasedonId extends TestBase {

    RequestSpecification requestSpecification = null;
    Response resp = null;
    String regex="^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$";
    String regexp_url="(http(s)?://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ;,./?%&=]*)?";

    @Given("^Get users API is up and Running on the server\\.$")
    public void get_users_API_is_up_and_Running_on_the_server() throws Throwable {
        RestAssured.baseURI = prop.getProperty("BASE_URI");
        requestSpecification = RestAssured.given().log().all().contentType("application/json;charset=UTF-8").accept("application/json");
    }

    @When("^perform get users api call on social networking site based on \"([^\"]*)\"$")
    public void perform_get_users_api_call_on_social_networking_site_based_on(String variable) throws Throwable {
        resp = requestSpecification.when().get("/users/"+variable);
    }

    @Then("^Validate response code (\\d+) and response data each attribute\\.$")
    public void validate_response_code_and_response_data_each_attribute(int statuscode) throws Throwable {
        Assert.assertEquals(resp.getStatusCode(), statuscode);
        GetUser respObj = (GetUser) resp.getBody().as(GetUser.class);
        SoftAssert soft = new SoftAssert();
        if (resp.getStatusCode()==200)
        {
            soft.assertTrue(respObj.getId() > 0);
            soft.assertTrue(respObj.getName().length() > 0);
            soft.assertTrue(respObj.getUsername().length() > 0);
            soft.assertTrue(respObj.getEmail().length() > 0);
            soft.assertTrue(Pattern.compile("^.*$").matcher(respObj.getPhone()).matches() );
            soft.assertTrue(respObj.getWebsite().length() > 0);
            soft.assertTrue(respObj.getAddress().getStreet().length() > 0);
            soft.assertTrue(respObj.getAddress().getSuite().length() > 0);
            soft.assertTrue(respObj.getAddress().getCity().length() > 0);
            soft.assertTrue(respObj.getAddress().getZipcode().length() > 0);
            soft.assertTrue(respObj.getAddress().getGeo().getLat().length() > 0);
            soft.assertTrue(respObj.getAddress().getGeo().getLng().length() > 0);
            soft.assertTrue(respObj.getCompany().getName().length() > 0);
            soft.assertTrue(respObj.getCompany().getCatchPhrase().length() > 0);
            soft.assertTrue(respObj.getCompany().getBs().length() > 0);

            soft.assertTrue(Pattern.compile("^[0-9]+$").matcher(respObj.getId().toString()).matches());
            soft.assertTrue(Pattern.compile("^.*$").matcher(respObj.getName()).matches());
            soft.assertTrue(Pattern.compile("^.*$").matcher(respObj.getUsername()).matches());
            soft.assertTrue(Pattern.compile(regex).matcher(respObj.getEmail()).matches());
            soft.assertTrue(Pattern.compile("^.*$").matcher(respObj.getPhone()).matches() );
            soft.assertTrue(Pattern.compile(regexp_url).matcher(respObj.getWebsite()).matches());
            soft.assertTrue(Pattern.compile("^.*$").matcher(respObj.getAddress().getStreet()).matches());
            soft.assertTrue(Pattern.compile("^.*$").matcher(respObj.getAddress().getSuite()).matches());
            soft.assertTrue(Pattern.compile("^.*$").matcher(respObj.getAddress().getCity()).matches());
            soft.assertTrue(Pattern.compile("^\\d{5}(-\\d{4})?$").matcher(respObj.getAddress().getZipcode()).matches());
            soft.assertTrue(Pattern.compile("^.*$").matcher(respObj.getCompany().getName()).matches());
            soft.assertTrue(Pattern.compile("^.*$").matcher(respObj.getCompany().getCatchPhrase()).matches());
            soft.assertTrue(Pattern.compile("^.*$").matcher(respObj.getCompany().getBs()).matches());
        }
        soft.assertAll();
    }
}
