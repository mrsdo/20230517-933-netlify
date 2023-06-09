![Netlify examples](netlify-badge-examples.png)

# Exploring Netlify
- Version 1.0.0
- Last Updated May 17, 2023
- Author: ~M.Dolce
- Documentation: 📚 [Docs Getting Started Tutorial](https://docs.netlify.com/get-started/?utm_medium=social&utm_source=github&utm_campaign=devex-ph&utm_content=devex-examples)
- **Site URL:** https://loquacious-pastelito-10a592.netlify.app/
---


## Challenges & Goals
Map: x = done p = in process r = researching

| Server                                                           | Completed |
|------------------------------------------------------------------|-----------|
| `• Learn how to create/manage sites using Netlify and GitHub`    | r         |
| `• Create a portal repository for web applications and projects` | p         |
| `• Explore using GitHub workflows`                               | p         |
| `• Implement DevOps via Netlify CLI with local to the remote`    | p         |
| `• Explore content API push/pull (Gatsby?)`                      | p         |

## Workflows & Tasks Documentation

<details>
 <summary>20230517-933-29S-3	Clone a repo to local host</summary>

> Get started with Netlify CLI: https://docs.netlify.com/cli/get-started/

> Deploy via Netlify  [![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-feature-tour&utm_medium=social&utm_source=github&utm_campaign=devex&utm_content=devex-examples)

> Switch to the repo called deployPreview.

> Edit the file: pages/deploy-previews.astro

> Save the change, commit it, and push it to your GitHub repo.

> Open a pull request against the main branch from the deployPreview branch.
 
> Visit app.netlify.com — Netlify will automatically build the Deploy Preview.

> Once the site is done building, visit the generated URL to access your changes!

> Learn about Deploy Previews in the Netlify docs: https://docs.netlify.com/site-deploys/deploy-previews/

</details>

<details>
 <summary>20230517-933-29S-4	Adding a simple Hello World function</summary>

> Create a new hello-world.js file in the netlify/functions folder

> Copy and paste the following code with the minimum structure required for Netlify Functions, then save the file.

```javascript
exports.handler = async () => {
  return {
    statusCode: 200,
    body: 'hello world!',
  };
};

```
**NOTE:**
The previous code generated an error. 

>> {"level":"error","message":"End - Error:"}
{"errorMessage":"lambdaFunc[lambdaHandler] is not a function","errorType":"TypeError","level":"error","stackTrace":[...]


**Actual working Function:**

```javascript
exports.handler = async function (event, context) {
return {
	statusCode: 200,
	body: JSON.stringify({ message: "Hello World" }),
    };
};
```

> Use the Netlify Dev functionality of the Netlify CLI

```npm
netlify dev (Shortcut: ntl dev)
```

> Visit http://localhost:8888/.netlify/functions/hello-world

> PRINTS: {"message":"Hello World"} to the browser

</details>

<details>
 <summary>20230517-933-29S-5	Using Environment Variables</summary>

<i>"...you can create environment variables on Netlify and refer to them in your function with process.env syntax. This allows you to use external APIs that require secret tokens, such as Stripe, Slack, and Airbase, while keeping everything secret. What happens in a serverless function is not visible in the frontend when making requests."
</i>

src: https://docs.netlify.com/environment-variables/overview/

> From: Site settings > Environment variables. Then select Add a variable.

> Add environment variable with a Key name and value. Leave scope settings as default.

> Update the hello-world.js file with this code:

```javascript
exports.handler = async function (event, context) {
  const mySecretKey = process.env.MY_SECRET_KEY;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello World! ${mySecretKey} is working!` }),
  };
};
```

> Exit Netlify Dev (Control + C). Then:

```NPM
netlify link (shortcut: ntl link)
```

> Then restart Dev environment with:

```NPM
ntl dev
```

> Updated function with Env Key will print the secret value assigned to the variable

</details>

<details>
 <summary>20230517-933-29S-6	Using Redirects</summary>

> Redirects are handled by the /public/_redirects file. Add this:

```javascript
/api/* /.netlify/functions/:splat

```

> This rule adds a new 'path' to the hello-world URL

- OLD: PATH/.netlify/functions/hello-world

- NEW: PATH/api/hello-world 

> Testing requires a commit/push to GitHub repo

</details>

<details>
 <summary>20230517-933-29S-7	Using Forms</summary>

src: https://docs.netlify.com/forms/setup/?_gl=1%2a1javo8i%2a_gcl_aw%2aR0NMLjE2ODQzMjg3NzQuQ2p3S0NBanc5cEdqQmhCLUVpd0FhNWpsM0RyLXFReG5BekM4N1JabWt1VWppYnRKSmh0MGJWemlBRXhqbmpiWW9UZnZkUGw3ZldlazRob0NVN0VRQXZEX0J3RQ..&_ga=2.181328544.601870155.1684328774-1597434842.1684328774&_gac=1.85213675.1684328774.CjwKCAjw9pGjBhB-EiwAa5jl3Dr-qQxnAzC87RZmkuUjibtJJht0bVziAExjnjbYoTfvdPl7fWek4hoCU7EQAvD_BwE

> Enable automatic form detection in Netlify UI. Site Settings > Forms > Enable form detection
 
> /src/pages/contact-form.astro

> Commit and push

> Test via https://loquacious-pastelito-10a592.netlify.app/contact-form/ 
 
> Returns message: Submission received!

> To see the results of this: In the Netlify UI, select the Forms tab for your site.

> Select the active contact form from the Active forms list, and you should find the submission listed.

</details>