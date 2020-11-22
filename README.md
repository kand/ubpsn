# ubpsn
Uptown/Buena Park Solidarity Network website.

## Setup

### Initial

Before you can get started on development, follow these steps to install everything you'll need for development:

1. Install [yarn](https://classic.yarnpkg.com/en/).
2. Run `yarn install` to run dependencies.

### Local Development

To run the site locally use the command `yarn run serve-dev` which will start up the local development environment and open the local site. Gatsby has a great local development setup, so as you make changes to the code, the website will refresh itself and you'll be able to view your updates.

### SSH

Deploying changes and doing maintenance on the server will require NearlyFreeSpeech to have a public SSH key that you've generated. Follow these steps to create that key and give it to NearlyFreeSpeech:

1. Generate an [ssh key](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
2. Upload the generated [public key to NearlyFreeSpeech](https://faq.nearlyfreespeech.net/q/sshkeys).
3. Create a file `.shell_config` that contains a variable `WEBSITE_SSH=<user>@<host>` where `<user>` is your ssh username and `<host>` is the host of the site. This environment variable will be used when doing deployments and for SSH-ing into the prod server.

### Deploy

After setting up your SSH, run `yarn deploy` to deploy the contents of the `dist/` directory to the public folder on the remote production server.
