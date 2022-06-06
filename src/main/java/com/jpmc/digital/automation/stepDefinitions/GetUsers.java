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

public class GetUsers extends TestBase {

    RequestSpecification requestSpecification = null;
    Response resp = null;
    String regex="^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$";
    String regexp_url="(http(s)?://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ;,./?%&=]*)?";

    @Given("^Get users API is up and Running on the server$")
    public void get_users_API_is_up_and_Running_on_the_server() throws Throwable {
        RestAssured.baseURI = prop.getProperty("BASE_URI");
        requestSpecification = RestAssured.given().log().all().contentType("application/json;charset=UTF-8").accept("application/json");
    }

    @When("^perform get users api call on social network site$")
    public void perform_get_users_api_call_on_social_network_site() throws Throwable {
        resp = requestSpecification.when().get("users");
    }

    @Then("^Validate the response code and response data for all users$")
    public void validate_the_response_code_and_response_data_for_all_users() throws Throwable {
        Assert.assertEquals(resp.getStatusCode(), 200);
        GetUser[] respObj = (GetUser[]) resp.getBody().as(GetUser[].class);
        SoftAssert soft = new SoftAssert();
        if (respObj.length > 0) {
            for (int i = 0; i < respObj.length; i++)
            {
                soft.assertTrue(respObj[i].getId() > 0);
                soft.assertTrue(respObj[i].getName().length() > 0);
                soft.assertTrue(respObj[i].getUsername().length() > 0);
                soft.assertTrue(respObj[i].getEmail().length() > 0);
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getPhone()).matches() );
                soft.assertTrue(respObj[i].getWebsite().length() > 0);
                soft.assertTrue(respObj[i].getAddress().getStreet().length() > 0);
                soft.assertTrue(respObj[i].getAddress().getSuite().length() > 0);
                soft.assertTrue(respObj[i].getAddress().getCity().length() > 0);
                soft.assertTrue(respObj[i].getAddress().getZipcode().length() > 0);
                soft.assertTrue(respObj[i].getAddress().getGeo().getLat().length() > 0);
                soft.assertTrue(respObj[i].getAddress().getGeo().getLng().length() > 0);
                soft.assertTrue(respObj[i].getCompany().getName().length() > 0);
                soft.assertTrue(respObj[i].getCompany().getCatchPhrase().length() > 0);
                soft.assertTrue(respObj[i].getCompany().getBs().length() > 0);


                soft.assertTrue(Pattern.compile("^[0-9]+$").matcher(respObj[i].getId().toString()).matches());
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getName()).matches());
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getUsername()).matches());
                soft.assertTrue(Pattern.compile(regex).matcher(respObj[i].getEmail()).matches());
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getPhone()).matches() );
                soft.assertTrue(Pattern.compile(regexp_url).matcher(respObj[i].getWebsite()).matches());
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getAddress().getStreet()).matches());
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getAddress().getSuite()).matches());
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getAddress().getCity()).matches());
                soft.assertTrue(Pattern.compile("^\\d{5}(-\\d{4})?$").matcher(respObj[i].getAddress().getZipcode()).matches());
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getCompany().getName()).matches());
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getCompany().getCatchPhrase()).matches());
                soft.assertTrue(Pattern.compile("^.*$").matcher(respObj[i].getCompany().getBs()).matches());
            }
            soft.assertAll();
        }
    }
}
