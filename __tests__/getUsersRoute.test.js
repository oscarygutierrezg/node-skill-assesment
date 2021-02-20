const request = require('supertest')
const app = require('../infrastructure/server')
const axios = require('axios');
jest.mock('axios');

describe('Get Users', () => {
  it('should return all users', async () => {
    const res = await request(app.server)
      .get('/users')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toStrictEqual([])
  }),
  it('should return all users', async () => {
    const response = {
      statusText: 'OK',
      data :{
      "total_count": 6,
      "incomplete_results": false,
      "items": [
        {
          "login": "Payflow",
          "id": 14900522,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjE0OTAwNTIy",
          "avatar_url": "https://avatars.githubusercontent.com/u/14900522?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Payflow",
          "html_url": "https://github.com/Payflow",
          "followers_url": "https://api.github.com/users/Payflow/followers",
          "following_url": "https://api.github.com/users/Payflow/following{/other_user}",
          "gists_url": "https://api.github.com/users/Payflow/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Payflow/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Payflow/subscriptions",
          "organizations_url": "https://api.github.com/users/Payflow/orgs",
          "repos_url": "https://api.github.com/users/Payflow/repos",
          "events_url": "https://api.github.com/users/Payflow/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Payflow/received_events",
          "type": "Organization",
          "site_admin": false,
          "score": 1.0
        },
        {
          "login": "awesmdiver",
          "id": 16689885,
          "node_id": "MDQ6VXNlcjE2Njg5ODg1",
          "avatar_url": "https://avatars.githubusercontent.com/u/16689885?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/awesmdiver",
          "html_url": "https://github.com/awesmdiver",
          "followers_url": "https://api.github.com/users/awesmdiver/followers",
          "following_url": "https://api.github.com/users/awesmdiver/following{/other_user}",
          "gists_url": "https://api.github.com/users/awesmdiver/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/awesmdiver/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/awesmdiver/subscriptions",
          "organizations_url": "https://api.github.com/users/awesmdiver/orgs",
          "repos_url": "https://api.github.com/users/awesmdiver/repos",
          "events_url": "https://api.github.com/users/awesmdiver/events{/privacy}",
          "received_events_url": "https://api.github.com/users/awesmdiver/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        },
        {
          "login": "payflowpa",
          "id": 69242170,
          "node_id": "MDQ6VXNlcjY5MjQyMTcw",
          "avatar_url": "https://avatars.githubusercontent.com/u/69242170?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/payflowpa",
          "html_url": "https://github.com/payflowpa",
          "followers_url": "https://api.github.com/users/payflowpa/followers",
          "following_url": "https://api.github.com/users/payflowpa/following{/other_user}",
          "gists_url": "https://api.github.com/users/payflowpa/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/payflowpa/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/payflowpa/subscriptions",
          "organizations_url": "https://api.github.com/users/payflowpa/orgs",
          "repos_url": "https://api.github.com/users/payflowpa/repos",
          "events_url": "https://api.github.com/users/payflowpa/events{/privacy}",
          "received_events_url": "https://api.github.com/users/payflowpa/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        },
        {
          "login": "PayFlows",
          "id": 66035125,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjY2MDM1MTI1",
          "avatar_url": "https://avatars.githubusercontent.com/u/66035125?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/PayFlows",
          "html_url": "https://github.com/PayFlows",
          "followers_url": "https://api.github.com/users/PayFlows/followers",
          "following_url": "https://api.github.com/users/PayFlows/following{/other_user}",
          "gists_url": "https://api.github.com/users/PayFlows/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/PayFlows/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/PayFlows/subscriptions",
          "organizations_url": "https://api.github.com/users/PayFlows/orgs",
          "repos_url": "https://api.github.com/users/PayFlows/repos",
          "events_url": "https://api.github.com/users/PayFlows/events{/privacy}",
          "received_events_url": "https://api.github.com/users/PayFlows/received_events",
          "type": "Organization",
          "site_admin": false,
          "score": 1.0
        },
        {
          "login": "PayFlowz",
          "id": 20914860,
          "node_id": "MDQ6VXNlcjIwOTE0ODYw",
          "avatar_url": "https://avatars.githubusercontent.com/u/20914860?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/PayFlowz",
          "html_url": "https://github.com/PayFlowz",
          "followers_url": "https://api.github.com/users/PayFlowz/followers",
          "following_url": "https://api.github.com/users/PayFlowz/following{/other_user}",
          "gists_url": "https://api.github.com/users/PayFlowz/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/PayFlowz/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/PayFlowz/subscriptions",
          "organizations_url": "https://api.github.com/users/PayFlowz/orgs",
          "repos_url": "https://api.github.com/users/PayFlowz/repos",
          "events_url": "https://api.github.com/users/PayFlowz/events{/privacy}",
          "received_events_url": "https://api.github.com/users/PayFlowz/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        },
        {
          "login": "Payflow98",
          "id": 73545463,
          "node_id": "MDQ6VXNlcjczNTQ1NDYz",
          "avatar_url": "https://avatars.githubusercontent.com/u/73545463?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Payflow98",
          "html_url": "https://github.com/Payflow98",
          "followers_url": "https://api.github.com/users/Payflow98/followers",
          "following_url": "https://api.github.com/users/Payflow98/following{/other_user}",
          "gists_url": "https://api.github.com/users/Payflow98/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Payflow98/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Payflow98/subscriptions",
          "organizations_url": "https://api.github.com/users/Payflow98/orgs",
          "repos_url": "https://api.github.com/users/Payflow98/repos",
          "events_url": "https://api.github.com/users/Payflow98/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Payflow98/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        }
      ]
    }}
    ;

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
  
    const res = await request(app.server)
    .get('/users/sync')
  expect(res.statusCode).toEqual(200);
  expect(res.text).toEqual('Sync OK');
  })
})
