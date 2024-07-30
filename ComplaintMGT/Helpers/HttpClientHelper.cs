using ComplaintMGT.Abstractions.Entities;
using DocumentFormat.OpenXml.InkML;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ComplaintMGT.Helpers
{

    public class HttpClientHelper<T>
    {
        static string apiBaseUrl = Startup.StaticConfig.GetValue<string>("WebAPIBaseUrl");
        static bool useBasicAuthorization = Convert.ToBoolean(Startup.StaticConfig.GetValue<string>("UseBasicAuthorization"));
        static string BasicAuth = "Basic " + Convert.ToBase64String(Encoding.Default.GetBytes("copmgt:copmgt#2022"));

        public T GetSingleItemRequest(string apiUrl, HttpContext context)
        {
            string endpoint = apiBaseUrl + apiUrl;
            var result1 = default(T);
            using (HttpClient client = new HttpClient())
            {
                //set basic authorization configurable 
                client.DefaultRequestHeaders.Add("UseBasicAuthorization", useBasicAuthorization.ToString());
                if (useBasicAuthorization == true)
                {
                    client.DefaultRequestHeaders.Add("Authorization", BasicAuth);
                }
                else
                {
                    string jwtToken = Convert.ToString(context.Session.GetString("JWTToken"));
                    if (!string.IsNullOrEmpty(jwtToken))
                        client.DefaultRequestHeaders.Add("Authorization", "bearer " + jwtToken);
                }
                
                using (var Response = client.GetAsync(endpoint))
                {
                    Response.Wait();
                    var result = Response.Result;
                    if (result.IsSuccessStatusCode)
                    {
                        var readTask = result.Content.ReadAsStringAsync();
                        readTask.Wait();
                        if (typeof(T).Name == "String")
                            result1 = (T)Convert.ChangeType(readTask.Result, typeof(T));
                        else
                            result1 = JsonConvert.DeserializeObject<T>(readTask.Result);
                    }
                }
            }
            return result1;
        }
        public T PostRequest(string apiUrl, string bodyparam, HttpContext context)
        {
            string endpoint = apiBaseUrl + apiUrl;
            var result1 = default(T);
            using (HttpClient client = new HttpClient())
            {
                //set basic authorization configurable 
                client.DefaultRequestHeaders.Add("UseBasicAuthorization", useBasicAuthorization.ToString());
                if (useBasicAuthorization == true)
                {
                    client.DefaultRequestHeaders.Add("Authorization", BasicAuth);
                }
                else
                {
                    string jwtToken = Convert.ToString(context.Session.GetString("JWTToken"));
                    if (!string.IsNullOrEmpty(jwtToken))
                        client.DefaultRequestHeaders.Add("Authorization", "bearer " + jwtToken);
                }

                StringContent content = new StringContent(bodyparam, Encoding.UTF8, "application/json");
                using (var Response = client.PostAsync(endpoint, content))
                {
                    Response.Wait();
                    var result = Response.Result;
                    if (result.IsSuccessStatusCode)
                    {
                        var readTask = result.Content.ReadAsStringAsync();
                        readTask.Wait();
                        result1 = JsonConvert.DeserializeObject<T>(readTask.Result);
                    }

                }
            }
            return result1;
        }

        public string PostRequestString(string apiUrl, string bodyparam, HttpContext context)
        {
            string endpoint = apiBaseUrl + apiUrl;
            string result1 = string.Empty;
            using (HttpClient client = new HttpClient())
            {
                //set basic authorization configurable 
                client.DefaultRequestHeaders.Add("UseBasicAuthorization", useBasicAuthorization.ToString());
                if (useBasicAuthorization == true)
                {
                    client.DefaultRequestHeaders.Add("Authorization", BasicAuth);
                }
                else
                {
                    string jwtToken = Convert.ToString(context.Session.GetString("JWTToken"));
                    if (!string.IsNullOrEmpty(jwtToken))
                        client.DefaultRequestHeaders.Add("Authorization", "bearer " + jwtToken);
                }

                StringContent content = new StringContent(bodyparam, Encoding.UTF8, "application/json");
                using (var Response = client.PostAsync(endpoint, content))
                {
                    Response.Wait();
                    var result = Response.Result;
                    if (result.IsSuccessStatusCode)
                    {
                        var readTask = result.Content.ReadAsStringAsync();
                        readTask.Wait();
                        result1 = readTask.Result;

                    }

                }
            }
            return result1;
        }
        public string DeleteRequest(string apiUrl, HttpContext context)
        {
            string endpoint = apiBaseUrl + apiUrl;
            string result1 = string.Empty;
            using (HttpClient client = new HttpClient())
            {
                //set basic authorization configurable 
                client.DefaultRequestHeaders.Add("UseBasicAuthorization", useBasicAuthorization.ToString());
                if (useBasicAuthorization == true)
                {
                    client.DefaultRequestHeaders.Add("Authorization", BasicAuth);
                }
                else
                {
                    string jwtToken = Convert.ToString(context.Session.GetString("JWTToken"));
                    if (!string.IsNullOrEmpty(jwtToken))
                        client.DefaultRequestHeaders.Add("Authorization", "bearer " + jwtToken);
                }

                using (var Response = client.DeleteAsync(endpoint))
                {
                    Response.Wait();
                    var result = Response.Result;
                    if (result.IsSuccessStatusCode)
                    {
                        var readTask = result.Content.ReadAsStringAsync();
                        readTask.Wait();
                        result1 = readTask.Result;

                    }


                }
            }
            return result1;
        }
        public string GetRequest(string apiUrl, HttpContext context)
        {
            string endpoint = apiBaseUrl + apiUrl;
            string result1 = string.Empty;
            using (HttpClient client = new HttpClient())
            {
                //set basic authorization configurable 
                client.DefaultRequestHeaders.Add("UseBasicAuthorization", useBasicAuthorization.ToString());
                if (useBasicAuthorization == true)
                {
                    client.DefaultRequestHeaders.Add("Authorization", BasicAuth);
                }
                else
                {
                    string jwtToken = Convert.ToString(context.Session.GetString("JWTToken"));
                    if (!string.IsNullOrEmpty(jwtToken))
                        client.DefaultRequestHeaders.Add("Authorization", "bearer " + jwtToken);
                }

                using (var Response = client.GetAsync(endpoint))
                {
                    Response.Wait();
                    var result = Response.Result;
                    if (result.IsSuccessStatusCode)
                    {
                        var readTask = result.Content.ReadAsStringAsync();
                        readTask.Wait();
                        result1 = readTask.Result;

                    }


                }
            }
            return result1;
        }


    }


    public static class JWTTokenHelper
    {
        public static LoginResponse GetUserClaim(JwtSecurityToken token)
        {
            var response = new LoginResponse();
            response.Result = Convert.ToInt32(token.Claims.First(c => c.Type == "Result").Value);
            response.CCode = token.Claims.First(c => c.Type == "CCode").Value;
            response.Msg = token.Claims.First(c => c.Type == "Msg").Value;
            response.LoginId = token.Claims.First(c => c.Type == "LoginId").Value;
            response.FullName = token.Claims.First(c => c.Type == "FullName").Value;
            response.RoleId = Convert.ToInt32(token.Claims.First(c => c.Type == "RoleId").Value);
            response.RoleName = token.Claims.First(c => c.Type == "RoleName").Value;
            return response;
        }
    }
    public static class SessionExtensions
    {
        public static void SetObjectAsJson(this ISession session, string key, object value)
        {
            session.SetString(key, JsonConvert.SerializeObject(value));
        }

        public static T GetObjectFromJson<T>(this ISession session, string key)
        {
            var value = session.GetString(key);
            return value == null ? default(T) : JsonConvert.DeserializeObject<T>(value);
        }
    }
}
